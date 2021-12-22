<template>
    <main>
        <div class="container text-color">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Order details</h1>
                    <div class="primary-color card">
                        <div class="card-body">
                            <div class="card-text">
                                <b>Order ID:</b> #{{ order.id }} <br>
                                <b>Subtotal:</b> {{ subTotalString }}<br>
                                <b>Table Number:</b> {{ orderTableNumber }}<br>
                                <b>Paid?</b> <p class="d-inline-block" v-if="order.paid">Yes</p> <p v-else class="d-inline-block">No</p> <br>
                                <b>Created At:</b> {{ getProperTime(order.createdAt) }} <br>
                            </div>
                            <div class="order-courses mt-4">
                                <h2 class="mb-3">Products:</h2>
                                <div v-for="(productOrder, index) in order.productOrders" v-bind:key="index">
                                    <order-product v-if="childDataLoaded" v-bind:key="index" :orderProduct="productOrder" v-on:updateProductstatus="updateOrderStatusses" :orderProductStatusses="orderProductStatusses" ref="orderProduct"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
// import OrderCourse from '@/components/OrderCourse';
import OrderProduct from '@/components/OrderProduct';
import OrderService from '@/services/OrderService.js';
import TableService from '@/services/TableService.js';

const orderService = new OrderService();
const tableService = new TableService();

export default {
    name: 'OrderDetail',
    components: {
        // OrderCourse
        OrderProduct
    },
    data()
    {
        return {
            order: {},
            subTotalString: "",
            orderProductStatusses: [],
            childDataLoaded: false,
            orderTableNumber: {}
        }
    },
    methods: {
        async getInfo() {
            const id = this.$route.params.id;
            this.order = await orderService.getByID(id);
            this.subTotalString = "€ " + this.order.subTotal.toFixed(2);
            this.orderTableNumber = this.order.table.tableNumber;
            this.childDataLoaded = true;
            await this.getOrderStatusses();
        },

        async getRestaurantTables() {
            await tableService.getAll();
        },

        getProperTime(time) {
            const date = new Date(time);

            if(!(date instanceof Date))
                return time;

            const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
            const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

            return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${hours}:${minutes}`;
        },

        async getOrderStatusses() {
            this.orderProductStatusses = await orderService.getDeliveryStatusses();
        },

        async updateOrderStatusses() {
            for(let i = 0; i < this.order.productOrders.length; i++ ) {
                let updatedOrderProduct = this.$refs.orderProduct[i].orderProduct;

                if(this.order.productOrders.id == updatedOrderProduct.id) {
                    this.order.productOrders[i].orderStatus = updatedOrderProduct.orderStatus
                }
            }

            await orderService.update(this.order);
        }
    },
    mounted: function() {
        this.getRestaurantTables();
        this.getInfo();
    }
}
</script>

<style scoped>
  .order-products{
    padding: 2em;
  }

  .links{
    padding: 0 2em 2em 2em;
  }
</style>
