<template>
    <div class="order-course d-grid gap-3">
        <h1 class="text-center">{{ course.name }}</h1>
        <order-product
            v-for="(product, index) in course.products" v-bind:key="index"

            :product="product"
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
    props: ['course'],
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
