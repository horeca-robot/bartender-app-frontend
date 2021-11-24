<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title text-center d-inline-block">All orders</h5>
                                <div class="form-group d-inline-flex">
                                    <router-link class="textID" :to="'/orders/create'"><button class="btn btn-primary ms-3 mb-3">New</button></router-link>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="textTable">Table Number</th>
                                            <th scope="col" class="textTable">Paid?</th>
                                            <th scope="col" class="textTable">Action</th>
                                            <th scope="col" class="textTable">18+</th>
                                            <th scope="col" class="textTable">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(order, index) in orders" v-bind:key="index">
                                            <th scope="row" class="textTable">
                                                <router-link class="textID" :to="'/orders/' + order.id">{{ order.table != null ? order.table.tableNumber : 'N/A' }}</router-link>
                                            </th>
                                            <td>
                                                <select @change="updatePaymentStatus" class="form-select textTable" v-model="order.paid" :data-id="order.id">
                                                    <option :key="'idYes' + index" :value="true">Yes</option>
                                                    <option :key="'idNo' + index" :value="false">No</option>
                                                </select>
                                            </td>
                                            <td>
                                                <img class="icon mt-1" src="/assets/img/delete.svg">
                                                &nbsp;
                                                <router-link class="textID" :to="'/orders/update/' + order.id">
                                                    <img class="icon mt-1" src="/assets/img/edit.svg">
                                                </router-link>
                                            </td>
                                            <td v-if="checkIfOrderContainsAlcohol(order)" class="textTable trueAlcohol">Contains alcohol</td>
                                            <td v-else class="textTable falseAlcohol">Doesn't contain alcohol</td>
                                            <td class="textTable">{{ getProperTime(order.createdAt) }}</td>
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

const orderService = new OrderService();

export default {
    name: 'Orders',
    data()
    {
        return {
            orders: [],
        }
    },
    methods: {
        async getInfo() {
            this.orders = await orderService.getAll();
        },
        async updatePaymentStatus(e) {
            const selectBox = e.target;

            if(!(selectBox instanceof Element) || !selectBox.hasAttribute('data-id'))
                return;

            const orderId = selectBox.getAttribute('data-id');
            const order = this.getOrderFromOrdersByID(orderId);

            if(order == null)
                return;

            if(!await orderService.update(order)) {
                alert('Could not update payment status, please try again later.');
            }

        },
        getOrderFromOrdersByID(orderId) {
            for(const order of this.orders) {
                if(order.id == orderId)
                    return order;
            }

            return null;
        },
        checkIfOrderContainsAlcohol(order) {
            for(const orderProduct of order.productOrders) {
                if(orderProduct.product.containsAlcohol == true)
                    return true;
            }
            return false;
        },
        getProperTime(time) {
            const date = new Date(time);

            if(!(date instanceof Date))
                return time;

            const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
            const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();

            return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${hours}:${minutes}`;
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

    .floatRight {
        float:right;
    }

    .textID {
        text-decoration: underline !important;
    }

    .textID:hover {
        opacity: 0.5;
    }
</style>
