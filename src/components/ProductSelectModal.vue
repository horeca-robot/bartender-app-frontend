<template>
    <!-- Using value -->
    <div>
        <b-button v-b-modal="'add-product-modal'">Add products</b-button>

        <!-- The modal -->
        <b-modal id="add-product-modal" size="xl" title="Add products">
            <div class="row p-2" v-for="(product, index) in this.products" :key="product.id" :id="product.id" >
                <div class="col-10">
                    <Product :product="product"/>
                </div>
                <div class="col-2 vertical-center">
                    <div class="btn-group" role="group" aria-label="Basic example" :id="product.id">
                        <button type="button" @click="minusProductCounter(index)" min="0" class="btn btn-primary"><img class="btnIcon" src="/assets/img/minus.png"></button>
                        <div class="bg-primary px-2">
                            <div class="mt-2 counterText" :id="'productCounter' + product.id">{{ product.counter }}</div>
                        </div>
                        <button type="button" @click="plusProductCounter(index)" max="100" class="btn btn-primary"><img class="btnIcon" src="/assets/img/plus.png"></button>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import Product from '@/components/Product';

export default {
    name: "ProductSelectModal",
    components: {
        Product
    },
    props: ["products"],
    methods: {
        plusProductCounter(index) {
            if(this.products[index].counter < 100) {
                this.products[index].counter += 1;
            }
            document.getElementById("productCounter" + this.products[index].id).innerHTML = this.products[index].counter;
        },
        minusProductCounter(index) {
            if(this.products[index].counter > 0) {
                this.products[index].counter -= 1;
            }
            document.getElementById("productCounter" + this.products[index].id).innerHTML = this.products[index].counter;
        },
    }
}
</script>

<style scoped>
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
