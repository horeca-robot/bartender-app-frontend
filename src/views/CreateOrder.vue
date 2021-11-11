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
                   <!-- Using value -->
                    <b-button v-b-modal="'add-product-modal'">Add products</b-button>

                    <!-- The modal -->
                    <b-modal id="add-product-modal" size="xl" title="Add products">
                        <div class="row p-2" v-for="(product, index) in products" :key="index">
                            <div class="col-10">
                                <Product :product="product"/>
                            </div>
                            <div class="col-2 vertical-center">
                                <div class="btn-group" role="group" aria-label="Basic example" :id="product.id">
                                    <button type="button" @click="minusProductCounter(product.id)" class="btn btn-primary"><img class="btnIcon" src="/assets/img/minus.png"></button>
                                    <div class="bg-primary px-2"> <div class="mt-2 counterText">{{ product.counter }}</div></div>
                                    <button type="button" @click="plusProductCounter(product.id)" class="btn btn-primary"><img class="btnIcon" src="/assets/img/plus.png"></button>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                   <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import TableService from '@/services/TableService.js';
import Product from '@/components/Product';

const tableService = new TableService();
const productService = new ProductService();

export default {
    name: 'CreateOrder',
    components: {
        Product
    },
    data()
    {
        return {
            order: {},
            isUpdateRoute: false,
            restaurantTables: [],
            products: [],
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
        plusProductCounter(productId) {
            console.log(productId);
            this.products[productId].counter += 1;
        },
        minusProductCounter(productId) {
            this.products[productId].counter -= 1;
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

  .btnIcon {
    min-width: 1em;
    max-width: 1em;
    filter: invert(1);
  }

  .counterText {
      color: white;
  }

  .vertical-center {
      display: flex;
      align-items: center;
  }
</style>
