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
                    <ProductSelectModal ref="productModal" :productsInOrder="order.productOrders" v-if="childDataLoaded"/>
                    <button type="submit" @click="updateOrder()" class="btn btn-primary mt-4">Update order</button>
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
            let existingOrderProducts = this.order.productOrders;
            let newlySelectedProducts = this.$refs.productModal.products.filter(product => product.count > 0);

            const orderProducts = [];

            // Update the product orders of the order
            for(let product of newlySelectedProducts) {
                if(product.count == undefined || !Number.isInteger(product.count))
                    continue;

                // This is probably redundand, so remove if you want...
                if(product.count == 0)
                    continue;

                // Either select an existing order product, or create a new one 
                while(product.count > 0) {
                    let foundExistingOrderProduct = false;
                    
                    // First find an existing product order
                    for(let i = existingOrderProducts.length - 1; i >= 0; i -= 1) {
                        if(existingOrderProducts[i].product.id == product.id) {
                            orderProducts.push(existingOrderProducts[i]);
                            existingOrderProducts.splice(i, 1);
                            foundExistingOrderProduct = true;
                            product.count -= 1;
                            break;
                        }
                    }

                    // Create a new product order when there doesn't exist one
                    if(!foundExistingOrderProduct) {
                        orderProducts.push({
                            orderStatus: 1, // Default status: OPEN_FOR_DELIVERY
                            product: product
                        });

                        product.count -= 1;
                    }
                }
            }

            this.order.productOrders = orderProducts;

            await orderService.update(this.order);
            this.$router.push('/orders');
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
