<template>
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

                            :id="course.id"
                            :name="course.name"
                            :products="course.products"
                            
                            v-on:remove="RemoveProduct(index)"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
            order: {
            }
        }
    },
    computed: {
        SubTotal: function()
        {
            let i = 0;
            this.products.forEach((item)=>{
                i += item.price;
            })

            return i;
        }
    },
    methods: {
        RemoveProduct(index)
        {
            if(index >= this.$data.order.products.length)
                return;

            this.$data.order.products.splice(index, 1);
        },
        getInfo() {
            this.order = OrderService.getOrders()[0];
        }
    },
    mounted: function() {
        this.getInfo();
        console.log(this.order);
    }
}
</script>

<style scoped>
  main{
    width: 95%;
    margin: auto;
  }

  .order-products{
    padding: 2em;
  }

  .links{
    padding: 0 2em 2em 2em;
  }
</style>
