<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Update order</h1>
                    <hr>
                    <label class="form-label">Table number</label>
                    <div class="form-group">
                        <select v-model="order.table" class="form-select mb-3 w-25" aria-label="Default select example">
                            <option disabled selected readyonly>Choose table</option>
                            <option v-for="(restaurantTables, index) in restaurantTables" :key="index" :value="restaurantTables">{{ restaurantTables.tableNumber }}</option>
                        </select>
                    </div>
                    <ProductSelectModal ref="productModal" :productsInOrder="order.productOrders"/>
                    <button type="submit" @click="createOrder()" class="btn btn-primary mt-4">Create order</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TableService from '@/services/TableService.js';
import OrderService from '@/services/OrderService.js';
import ProductSelectModal from '@/components/ProductSelectModal';

const tableService = new TableService();
const orderService = new OrderService();

export default {
    name: 'CreateOrder',
    components: {
        ProductSelectModal
    },
    data()
    {
        return {
            order: {},
            restaurantTables: [],
            products: []
            childDataLoaded: false,
        }
    },
    methods: {
        async getOrder() {
            this.order = await orderService.getByID(this.$route.params.id);
            this.childDataLoaded = true;
        },
        async getRestaurantTables() {
            this.restaurantTables = await tableService.getAll();
        },
        async updateOrder() {
            this.order.products = this.$refs.productModal.products.filter(product => product.count > 0);
            await orderService.update(this.order);
        }
    },
    mounted: function() {
        this.getRestaurantTables();
        this.getOrder();
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
