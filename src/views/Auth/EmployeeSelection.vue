<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-lg-12 col-md-12 col-sm-12 my-3">
                    <h1 class="display-1 center">Employee selection</h1>
                    <hr>
                    <div class="center">
                        <router-link v-for="(employee, index) in employees.employees" v-bind:key="index" class="form-control employeeBox mb-3" :to="'/login/' + employee.id">{{ employee.username }}</router-link>
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
    name: 'EmployeeSelection',

    data() {
        return {
            employees: []
        }
    },
    methods: {
        async getEmployees() {
            this.employees = await authService.getAll(0, 100);
            console.log(this.employees);
        },
    },
    mounted: function() {
        this.getEmployees();
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
