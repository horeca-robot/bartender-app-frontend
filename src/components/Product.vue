<template>
    <div class="product card p-2 bg-light border">
        <div class="row g-0">
            <div class="col-md-3">
                <img :src="product.img" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">&euro;{{ product.price }} {{ product.name }} </h5>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ product.remarks }}</small></p>
                    <div v-if="checkForSideProducts()" :class="'accordion' + product.id" role="tablist">
                        <b-card no-body class="mb-3">
                            <a @click="flip = !flip" v-b-toggle="'accordion-1' + product.id" variant="info">
                                <div class="p-2">
                                    <b class="p-1">Side products</b>
                                    <img class="icon arrowImg me-2" src="/assets/img/arrow.svg" :class="{'arrowImgFlip':flip}">
                                </div>
                            </a>
                            <b-collapse :id="'accordion-1' + product.id" accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <div class="row p-2" v-for="(byProduct, index) in product.byProduct" :key="index">
                                        <Product :product="byProduct" />
                                    </div>
                                </b-card-body>
                            </b-collapse>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product'],
        data() {
            return {'flip': false}
        },
        methods: {
            checkForSideProducts() {
                if (this.product.byProduct.length > 0) {
                    return true;
                }
                return false;
            }
        }
    }
</script>

<style>
    .arrowImg {
        float: right;
        transform: rotate(0deg);
        transition: all 0.4s ease;
    }

    .arrowImgFlip {
        float: right;
        transform: rotate(180deg);
        transition: all 0.4s ease;
    }
</style>
