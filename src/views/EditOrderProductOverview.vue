<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Products</h5>
                            <div class="row p-2" v-for="(product, index) in products" :key="index">
                                <Product :product="product"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Edit order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import Product from '@/components/Product';

export default {
    name: "EditOrderProductOverview",
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
            this.products = await ProductService.getProducts();
            console.log(this.products);
        }
    },
    mounted: function() {
        this.getInfo();
    }
}
</script>

<style scoped>

</style>
