<template>
    <div class="product card p-2 bg-light border">
        <div class="row g-0">
            <div class="col-md-3">
                <img :src="product.image" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">&euro;{{ product.price }} {{ product.name }} </h5>
                    <p class="card-text">{{ product.description }}</p>
                    <p class="card-text"><small class="text-muted">{{ product.remarks }}</small></p>
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
            checkForSideProducts() {
                // if (this.product.byProduct.length > 0) {
                //     return true;
                // }
                return false;
            }
        }
    }
</script>

<style>

</style>
