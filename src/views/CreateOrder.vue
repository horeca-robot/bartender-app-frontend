<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Create order</h1>
                    <hr>
                    <label class="form-label">Table number</label>
                    <div class="form-group">
                        <select v-model="order" class="form-select mb-3 w-25" aria-label="Default select example">
                            <option disabled selected readyonly>Choose table</option>
                            <option v-for="(restaurantTables, index) in restaurantTables" :key="index" :value="restaurantTables.id">{{ restaurantTables.tableNumber }}</option>
                        </select>
                    </div>
                    <ProductSelectModal :products="products"/>
                   <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import TableService from '@/services/TableService.js';
import ProductSelectModal from '@/components/ProductSelectModal';

const tableService = new TableService();
const productService = new ProductService();

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
        async getInfo() {
            this.products = await productService.getAll();

            this.products.forEach(element => {
                element.counter = 0;
            });
        },

    },
    mounted: function() {
        this.getRestaurantTables();
        this.getInfo();
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
