<template>
    <div class="product card p-2 bg-light border my-2">
        <div class="row g-0">
            <div class="col-md-3">
                <img :src="orderProduct.product.image" class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ orderProduct.product.name }} - &euro;{{ orderProduct.product.price }}</h5>
                    <p class="card-text">{{ orderProduct.product.description }}</p>
                    <p class="card-text"><b>Status:</b> {{ orderProduct.orderStatus }}</p>
                    <p class="card-text"><small class="text-muted">{{ orderProduct.product.remarks }}</small></p>
                </div>
                <!-- <div @click="FireRemoveEvent" class="product__remove"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderProduct',
    props: ['orderProduct'],
    methods: {
        FireRemoveEvent()
        {
            this.$emit('removedProduct');
        }
    }
}
</script>

<style>
    .product__remove{
        width: 1.5em;
        height: 1.5em;
        top: 0.5em;
        right: 0.5em;
        position: absolute;
        cursor: pointer;
    }

    .product__remove::before,
    .product__remove::after{
        content: '';
        width: 60%;
        height: 10%;
        display: block;
        top: 50%;
        left: 50%;
        position: absolute;
        background-color: #ff0000;
    }

    .product__remove::before{
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .product__remove::after{
        transform: translate(-50%, -50%) rotate(-45deg);
    }
</style>
