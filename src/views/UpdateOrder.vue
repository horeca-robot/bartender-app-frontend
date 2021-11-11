<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <h1 class="display-3 mt-3">Update order</h1>
                    <hr>
                    <div class="form-group my-3">
                        <label for="subTotal" class="form-label">Sub total</label>
                        <input type="text" v-model="order.subTotal" class="form-control">
                    </div>
                    <label class="form-label">Table number</label>
                    <div class="form-group">
                        <select v-model="order" class="form-select mb-3" aria-label="Default select example">
                            <option disabled selected readyonly>Choose table</option>
                            <option v-for="(restaurantTables, index) in restaurantTables" :key="index" :value="restaurantTables.id">{{ restaurantTables.tableNumber }}</option>
                        </select>
                    </div>
                        <!-- <label for="firstName" class="form-label">Voornaam</label>
                        <input type="text" v-model="bankAccount.firstName" class="form-control">
                    </div><div class="form-group my-3">
                        <label for="firstName" class="form-label">Voornaam</label>
                        <input type="text" v-model="bankAccount.firstName" class="form-control">
                    </div><div class="form-group my-3">
                        <label for="firstName" class="form-label">Voornaam</label>
                        <input type="text" v-model="bankAccount.firstName" class="form-control">
                    </div><div class="form-group my-3">
                        <label for="firstName" class="form-label">Voornaam</label>
                        <input type="text" v-model="bankAccount.firstName" class="form-control">
                    </div> -->

                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card">
                        <div class="card-body">
                            <!-- <div v-if="isUpdateRoute">Update</div>
                            <div v-else>CREATE</div> -->

                            <div class="order-courses mt-4">
                                <h2 class="mb-3">Products:</h2>
                                <div v-for="(productOrder, index) in order.productOrders" v-bind:key="index">
                                    <order-product v-bind:key="index" :orderProduct="productOrder"/>
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
    name: 'UpdateOrder',
    components: {
        // OrderCourse
        OrderProduct
    },
    data()
    {
        return {
            order: {},
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
