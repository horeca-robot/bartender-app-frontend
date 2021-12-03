<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col col-md-12 my-3">
                    <h1 class="display-1 center">Employee login</h1>
                    <hr>
                    <div class="w-50 mx-auto">
                        <div class="my-3">
                            <label for="pincode" class="form-label">Pincode</label>
                            <input type="password" v-model="employee.pincode" class="form-control" placeholder="Your pin...">
                            <button type="submit" v-on:click="LoginEmployee(employee.id, employee)" class="btn btn-primary mt-2">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import AuthService from '@/services/AuthService.js';

const authService = new AuthService();

export default {
    name: 'Login',

    data() {
        return {
            employee: {}
        }
    },
    methods: {
        async getEmployee() {
            const id = this.$route.params.id;
            this.employee = await authService.getByID(id);
        },
        async LoginEmployee(employeeID, employee) {
            const token =  await authService.LogIn(employeeID, employee);
            localStorage.setItem('authToken', token);
            console.log(token);
        }
    },
    mounted: function() {
        this.getEmployee();
    }
}
</script>

<style scoped>
    .center {
        display: flex !important;
        justify-content: center;
    }

    .employeeBox {
        width: 50% !important;
    }
</style>
