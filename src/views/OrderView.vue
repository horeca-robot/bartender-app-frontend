<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">
                                #{{ order.id }} <br>
                                Subtotal: {{order.subtotal}}<br>
                                Payment Status: {{ order.payment_status }} <br>
                                Created At: {{ order.created_at }} <br>
                                Robot Id: {{ order.robot_id }}
                            </p>
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

export default {
    name: 'ViewOrder',
    components: {
        OrderCourse
    },
    data()
    {
        return {
            order: {}
        }
    },
    methods: {
        getInfo() {
            let id = this.$route.params.id;
            this.order = OrderService.getOrderById(id);
        }
    },
    mounted: function() {
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
