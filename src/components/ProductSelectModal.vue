<template>
    <!-- Using value -->
    <div>
        <b-button v-b-modal="'add-product-modal'">Add products</b-button>

        <!-- The modal -->
        <b-modal id="add-product-modal" size="xl" title="Add products" content-class="primary-color text-color">
            <div class="row p-2" v-for="(product) in this.$data.products" :key="product.id" :id="product.id" >
                <ProductWithCounter :product="product"/>
            </div>
        </b-modal>
    </div>
</template>

<script>
import ProductService from '@/services/ProductService.js';
import ProductWithCounter from '@/components/ProductWithCounter';
import AuthService from '@/services/AuthService.js';

const authService = new AuthService(null);
const productService = new ProductService(authService.getLocalJWT());

export default {
    name: "ProductSelectModal",
    components: {
        ProductWithCounter
    },
    props: ['productsInOrder'],
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

            if(this.$props.productsInOrder !== undefined) {
                this.$props.productsInOrder.forEach(element => {
                    this.products.forEach(elementChild => {
                        if(element.product.id == elementChild.id) {
                            elementChild.count++;
                        }
                    });
                });
            }
        }
    },
    mounted: function() {
        this.getProducts();
    }
}
</script>

<style>
</style>
