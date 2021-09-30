<template>
    <div class="container">
        <div class="row h-100">
            <div class="col-auto col-md-12 col-sm-12 my-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title text-center py-3">All orders</h5>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" class="textTable">OrderID</th>
                                        <th scope="col" class="textTable">Status</th>
                                        <th scope="col" class="textTable">Action</th>
                                        <th scope="col" class="textTable">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order, index) in orders" v-bind:key="index">
                                        <th scope="row" class="textTable">{{ order.id }}</th>
                                        <td>
                                            <select class="form-select textTable">
                                                <option :value="order.status" selected disabled>{{order.status}}</option>
                                                <option :value="order.status">Done</option>
                                                <option :value="order.status">Prepared</option>
                                                <option :value="order.status">Pending</option>
                                            </select>
                                        </td>
                                        <td><img class="icon mt-1" src="@/assets/delete.svg"> &nbsp; <img class="icon mt-1" src="@/assets/edit.svg"></td>
                                        <td class="textTable">{{ order.created_at }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrderService from '@/services/OrderService.js';

export default {
    name: 'Orders',
    data()
    {
        return {
            orders: {}
        }
    },
    methods: {
        getInfo() {
            this.orders = OrderService.getOrders();
        }
    },
    mounted: function() {
        this.getInfo();
        console.log(this.order);
    }
}
</script>

<style scoped>
    .card {
        justify-content: center;
    }

    .table {
        border: solid 2px gray;
    }

    h5 {
        font-size: 2em;
    }

    td, th {
        vertical-align: middle;
    }

    .textTable {
        font-size: 1.3em;
    }
</style>