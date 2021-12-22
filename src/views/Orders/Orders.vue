<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="primary-color text-color card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title text-center d-inline-block">All orders</h5>
                                <div class="form-group d-inline-flex">
                                    <router-link class="textID" :to="'/orders/create'"><button class="btn btn-primary ms-3 mb-3">New</button></router-link>
                                </div>
                            </div>
                            <div class="table-responsive primary-color">
                                <table class="table table-striped table-hover text-color">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="textTable">Table Number</th>
                                            <th scope="col" class="textTable">Order done?</th>
                                            <th scope="col" class="textTable">Paid?</th>
                                            <th scope="col" class="textTable">Action</th>
                                            <th scope="col" class="textTable">18+</th>
                                            <th scope="col" class="textTable">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(order, index) in orders.orders" v-bind:key="index">
                                            <th scope="row" class="textTable">
                                                <router-link class="textID text-color" :to="'/orders/' + order.id">{{ order.table != null ? order.table.tableNumber : 'N/A' }}</router-link>
                                            </th>
                                            <td v-if="order.orderDone" class="textTable falseAlcohol" style="text-transform:capitalize;">Yes</td>
                                            <td v-else class="textTable trueAlcohol" style="text-transform:capitalize;">No</td>
                                            <td>
                                                <select @change="updatePaymentStatus" class="form-select textTable primary-color text-color" v-model="order.paid" :data-id="order.id">
                                                    <option :key="'idYes' + index" :value="true">Yes</option>
                                                    <option :key="'idNo' + index" :value="false">No</option>
                                                </select>
                                            </td>
                                            <td>
                                                <i class="far fa-trash-alt fontIcon text-color"></i>
                                                &nbsp;
                                                <router-link class="textID" :to="'/orders/update/' + order.id">
                                                    <i class="far fa-edit fontIcon text-color"></i>
                                                </router-link>
                                                &nbsp;
                                                <i @click="sendToTable(order.id, order.table.tableNumber)" class="fas fa-concierge-bell fontIcon text-color"></i>
                                            </td>
                                            <td v-if="checkIfOrderContainsAlcohol(order)" class="textTable trueAlcohol">Contains alcohol</td>
                                            <td v-else class="textTable falseAlcohol">Doesn't contain alcohol</td>
                                            <td class="textTable text-color">{{ getProperTime(order.createdAt) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card-footer center">
                            <b-button variant="outline-primary text-color" class="m-1" @click="getInfo(orders.current - 1)" :disabled="orders.current <= 0">Previous Page</b-button>
                                <b class="mt-2"> Page {{ orders.current + 1 }} of {{ orders.total }} </b>
                            <b-button variant="outline-primary text-color" class="m-1" @click="getInfo(orders.current + 1)" :disabled="orders.current + 1 >= orders.total">Next Page</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import OrderService from '@/services/OrderService.js';
import RobotService from '@/services/RobotService.js';
import AuthService from '@/services/AuthService.js';

const authService = new AuthService(null);
const orderService = new OrderService(authService.getLocalJWT());

export default {
    name: 'Orders',
    data()
    {
        return {
            orders: [],
        }
    },
    methods: {
        async getInfo(page = 0, size = 5) {
            this.orders = await orderService.getAll(page, size);
        },
        async updatePaymentStatus(e) {
            const selectBox = e.target;
            if(!(selectBox instanceof Element) || !selectBox.hasAttribute('data-id'))
                return;

            const orderId = selectBox.getAttribute('data-id');
            const order = this.getOrderFromOrdersByID(orderId);

            if (confirm("Are you sure you want to change the payment-status?")) {
                if(order == null)
                    return;

                if(!await orderService.update(order)) {
                    alert('Could not update payment status, please try again later.');
                }
            }
            else {
                order.paid = !order.paid;
            }
        },
        getOrderFromOrdersByID(orderId) {
            for(const order of this.orders.orders) {
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

            return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${hours}:${minutes}`;
        },
        async sendToTable(orderId, tableNumber) {
            const robot = await RobotService.getRobotFromOrder(orderId);
            await RobotService.sendToTable(robot.id, tableNumber);
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
        color: rgb(235, 69, 69) !important;
    }

    .falseAlcohol {
        color: rgb(74, 235, 74) !important;
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

    .center {
        display: flex !important;
        justify-content: center;
    }
</style>
