<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col col-md-12 my-3">
                    <div class="primary-color text-color card">
                        <h1 class="display-1 center text-color">Employee selection</h1>
                        <hr>

                        <div class="w-50 mx-auto mb-3">
                            <label for="search" class="form-label text-color">Search</label>
                            <input type="text" class="form-control primary-color text-color" placeholder="Search...">
                            <hr>
                        </div>

                        <div v-for="(employee, index) in employees.employees" v-bind:key="index" class="center">
                            <router-link class="form-control w-50 mb-3 with-arrow with-arrow--right primary-color text-color" :to="'/login/' + employee.id">{{ employee.username }}</router-link> <br>
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
</style>
