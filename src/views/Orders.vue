<template>
    <main>
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
                                            <th scope="col" class="textTable">18+</th>
                                            <th scope="col" class="textTable">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(order, index) in orders" v-bind:key="index">
                                            <th scope="row" class="textTable"><router-link :to="'/orders/' + order.id">{{ order.id }}</router-link></th>
                                            <td>
                                                <select class="form-select textTable">
                                                    <option :value="order.status" selected disabled>{{order.status}}</option>
                                                    <option :value="order.status">Done</option>
                                                    <option :value="order.status">Prepared</option>
                                                    <option :value="order.status">Pending</option>
                                                </select>
                                            </td>
                                            <td><img class="icon mt-1" src="/assets/img/delete.svg"> &nbsp; <img class="icon mt-1" src="/assets/img/edit.svg"></td>
                                            <td v-if="order.alcohol" class="textTable trueAlcohol">Contains alcohol</td>
                                            <td v-else class="textTable falseAlcohol">Doesn't contain alcohol</td>
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
    </main>
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
        },
    },
    mounted: function() {
        this.getInfo();
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

    .trueAlcohol {
        color: rgb(235, 69, 69);
    }

    .falseAlcohol {
        color: rgb(74, 235, 74);
    }
</style>
