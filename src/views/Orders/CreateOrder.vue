<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Create order</h1>
                    <hr>
                    <label class="form-label">Table number</label>
                    <div class="form-group">
                        <select v-model="order.table" class="form-select mb-3 w-25 primary-color secondary-color" aria-label="Default select example">
                            <option disabled selected readyonly>Choose table</option>
                            <option v-for="(restaurantTables, index) in restaurantTables" :key="index" :value="restaurantTables">{{ restaurantTables.tableNumber }}</option>
                        </select>
                    </div>
                    <ProductSelectModal ref="productModal"/>
                    <button type="submit" @click="createOrder()" class="btn btn-primary mt-4">Create order</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TableService from '@/services/TableService.js';
import OrderService from '@/services/OrderService.js';
import AuthService from '@/services/AuthService.js';
import ProductSelectModal from '@/components/ProductSelectModal';

const authService = new AuthService(null);
const tableService = new TableService(authService.getLocalJWT());
const orderService = new OrderService(authService.getLocalJWT());

export default {
    name: 'CreateOrder',
    components: {
        ProductSelectModal
    },
    data() {
        return {
            order: {},
            restaurantTables: [],
            products: []
        }
    },
    methods: {
        async getRestaurantTables() {
            this.restaurantTables = await tableService.getAll();
        },
        async createOrder() {
            this.products = this.$refs.productModal.products.filter(product => product.count > 0);

            this.order.productOrders = [];

            for(const product of this.products) {
                for (let i = 0; i < product.count; i++) {
                    let productOrder = {
                        product: product
                    };

                    this.order.productOrders.push(productOrder)
                }
            }
            console.log(this.order);
            await orderService.create(this.order);
            this.$router.push('/orders');
        }
    },
    mounted: function() {
        this.getRestaurantTables();
    }
}
</script>

<style scoped>
  .order-products{
    padding: 2em;
  }

  .links{
    padding: 0 2em 2em 2em;
  }
</style>
