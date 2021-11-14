<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Create order</h1>
                    <hr>
                    <label class="form-label">Table number</label>
                    <div class="form-group">
                        <select v-model="order.restaurantTable" class="form-select mb-3 w-25" aria-label="Default select example">
                            <option disabled selected readyonly>Choose table</option>
                            <option v-for="(restaurantTables, index) in restaurantTables" :key="index" :value="restaurantTables.id">{{ restaurantTables.tableNumber }}</option>
                        </select>
                    </div>
                    <ProductSelectModal ref="productModal"/>
                    <button type="submit" @click="createOrder()" class="btn btn-primary">Create order</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import TableService from '@/services/TableService.js';
import ProductSelectModal from '@/components/ProductSelectModal';

const tableService = new TableService();

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
        }
    },
    methods: {
        async getRestaurantTables() {
            this.restaurantTables = await tableService.getAll();
        },
        createOrder() {
            this.order.products = this.$refs.productModal.products
            console.log(this.order);
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
