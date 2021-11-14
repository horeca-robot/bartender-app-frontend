<template>
    <!-- Using value -->
    <div>
        <b-button v-b-modal="'add-product-modal'">Add products</b-button>

        <!-- The modal -->
        <b-modal id="add-product-modal" size="xl" title="Add products">
            <div class="row p-2" v-for="(product) in this.products" :key="product.id" :id="product.id" >
                <ProductWithCounter :product="product"/>
            </div>
        </b-modal>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import ProductWithCounter from '@/components/ProductWithCounter';

const productService = new ProductService();

export default {
    name: "ProductSelectModal",
    components: {
        ProductWithCounter
    },
    data() {
        return {
            products: [],
        }
    },
    methods: {
        async getProducts() {
            this.products = await productService.getAll();

            this.products.forEach(element => {
                element.count = 0;
            });
        }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style>

</style>
