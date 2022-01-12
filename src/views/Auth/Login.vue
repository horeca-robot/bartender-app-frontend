<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col col-md-12 my-3">
                    <div class="primary-color text-color card">
                        <h1 class="display-1 center text-color">Employee login</h1>
                        <hr>
                        <div class="w-50 mx-auto">
                            <div class="my-3">
                                <div v-if="enteredPinCodeIsCorrect.length > 0" class="alert alert-danger">{{ enteredPinCodeIsCorrect }}</div>
                                <label for="pincode" class="form-label text-color">Pincode</label>
                                <input type="password" v-model="employee.pincode" class="form-control primary-color text-color" placeholder="Your pin...">
                                <button type="submit" v-on:click="loginEmployee(employee.id, employee)" class="btn btn-primary mt-2">Log in</button>
                            </div>
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
            employee: {},
            enteredPinCodeIsCorrect: ''
        }
    },
    methods: {
        async getEmployee() {
            const id = this.$route.params.id;
            this.employee = await authService.getByID(id);
        },
        async loginEmployee(employeeID, employee) {
            this.resetPasswordError();

            if(employee.pincode.length !== 4) {
                this.setPasswordError('The pincode must consist out of 4 digits.')
                return;
            }

            const token =  await authService.LogIn(employeeID, employee);

            if(token === null) {
                this.setPasswordError('Your pincode is not correct');
                return;
            }

            if(await authService.verifyJWT(token)) {
                localStorage.setItem('authToken', token);
                this.$router.push('/orders');
            } else {
                localStorage.clear('authToken');
                this.setPasswordError('Your pincode is not correct');
            }
        },
        setPasswordError(error)
        {
            this.$data.enteredPinCodeIsCorrect = error;
        },
        resetPasswordError()
        {
            this.$data.enteredPinCodeIsCorrect = '';
        },
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
