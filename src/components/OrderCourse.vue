<template>
    <div class="order-course d-grid gap-3">
        <h1 class="text-center">{{ name }}</h1>
        <order-product
            v-for="(product, index) in products" v-bind:key="index"

            :id="product.id"
            :name="product.name"
            :price="product.price"
            :description="product.description"
            :remarks="product.remarks"
            :img_url="product.img_url"
        />
    </div>
</template>

<script>
import OrderProduct from '@/components/OrderProduct';

export default {
    name: 'OrderCourse',
    components: {
        OrderProduct
    },
    props: ['id', 'name', 'products'],
    methods: {
        FireRemoveEvent()
        {
            this.$emit('remove');
        },
    }
}
</script>

<style>
.order-course{
    padding-top: 2em;
}
</style>