<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text">
                                #{{ order.id }} <br>
                                Subtotal: {{order.subTotal}}<br>
                                Paid? <p class="d-inline-block" v-if="order.paid">Yes</p> <p v-else class="d-inline-block">No</p> <br>
                                Created At: {{ order.createdAt }} <br>
                                <!-- <select class="form-select mb-3" aria-label="Default select example">
                                    <v-if></v-if>
                                    <option readonly disabled selected value="">Choose table number</option>
                                    <option v-for="(restaurantTable, index) in restaurantTables" :key="index" :value="restaurantTable.tableNumber">{{ restaurantTable.tableNumber }}</option>
                                </select> -->
                            </div>
                            <div class="order-courses">
                                <order-course
                                v-for="(course, index) in order.courses" v-bind:key="index"

                                :course="course"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import OrderCourse from '@/components/OrderCourse';
import OrderService from '@/services/OrderService.js';
import TableService from '@/services/TableService.js';

const orderService = new OrderService();
const tableService = new TableService();

export default {
    name: 'CreateAndUpdateOrder',
    components: {
        OrderCourse
    },
    data()
    {
        return {
            order: {},
            isUpdateRoute: true,
            restaurantTables: [],
        }
    },
    methods: {
        async getInfo() {
            const id = this.$route.params.id;
            this.order = await orderService.getByID(id);
        },
        async getRestaurantTables() {
            this.restaurantTables = await tableService.getAll();
        }
    },
    mounted: function() {
        this.getRestaurantTables();
        if (this.isUpdateRoute) {
            this.getInfo();
        }
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
