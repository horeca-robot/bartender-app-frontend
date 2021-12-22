<template>
    <div class="product card p-2 border my-2 primary-color secondary-color">
        <div class="row g-0">
            <div class="col-3">
                <img :src="product.image" class="img-fluid rounded-start">
            </div>
            <div class="col-7">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }} - &euro;{{ product.price }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ product.remarks }}</small></p>
                </div>
            </div>
            <div class="col-2 vertical-center">
                <div class="btn-group" role="group" aria-label="Basic example" :id="product.id">
                    <button type="button" @click="minusProductCounter()" min="0" class="btn btn-primary"><i class="fas fa-minus"></i></button>
                    <div class="bg-primary px-2">
                        <p class="mt-3 counterText" :id="'productCounter'+ product.id">{{ product.count }}</p>
                    </div>
                    <button type="button" @click="plusProductCounter()" class="btn btn-primary"><i class="fas fa-plus fontIcon"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product'],
        methods: {
            plusProductCounter() {
                if(this.product.count < 100) {
                    this.product.count++;
                }
                document.getElementById("productCounter" + this.product.id).innerHTML = this.product.count;
            },
            minusProductCounter() {
                if(this.product.count > 0) {
                    this.product.count--;
                }
                document.getElementById("productCounter" + this.product.id).innerHTML = this.product.count;
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
