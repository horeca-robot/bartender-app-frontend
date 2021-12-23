<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="primary-color text-color card h-100 ">
                        <div class="card-body">
                            <h5 class="card-title">Products</h5>
                            <div class="row p-2" v-for="(product, index) in products" :key="index">
                                <Product :product="product"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import AuthService from '@/services/AuthService.js';
import Product from '@/components/Product';

const authService = new AuthService(null);
const productService = new ProductService(authService.getLocalJWT());

export default {
    name: "ProductOverview",
    components: {
        Product,
    },
    data()
    {
        return {
            products: {}
        }
    },
    methods: {
        async getInfo() {
            this.products = await productService.getAll();
        }
    },
    mounted: function() {
        this.getInfo();
    }
}
</script>

<style scoped>

</style>
