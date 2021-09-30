<template>
    <div class="container">
        <div class="row">
            <div class="col-auto col-md-12 col-sm-12 my-3">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">
                            Payment Status: {{ paymentStatus }} <br>
                            Created At: {{ createdAt }}
                        </p>
                        <div class="order-courses">
                            <order-course 
                            v-for="(course, index) in courses" v-bind:key="index"

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

export default {
    name: 'ViewOrder',
    components: {
        OrderCourse
    },
    data()
    {
        return {
            paymentStatus: '',
            createdAt: '',
            courses: {}
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
            this.paymentStatus = 'Completed';
            this.createdAt = '24/09/2021 17:00';
            this.courses = [
                {
                    id:'1',
                    name: 'Voorgerechten',
                    products: [
                        {
                            name: 'Salade',
                            price: 8.29,
                            description: 'Gezond',
                            remarks: 'Met komkommer'
                        }
                    ]
                },
                {
                    id:'1',
                    name: 'Hoofdgerechten',
                    products: [
                        {
                            name: 'Pizza Margharita',
                            price: 6.49,
                            description: 'Saaie pizza',
                            remarks: 'Niks'
                        },
                        {
                            name: 'Pizza Hawaii',
                            price: 7.99,
                            description: 'Ananas',
                            remarks: 'Zonder Ananas'
                        }
                    ]
                }
            ]
        }
    },
    mounted: function() {
        this.getInfo();
        this.payment_status = this.paymentStatus;
        this.created_at = this.createdAt;
        //console.log(this.courses);
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
