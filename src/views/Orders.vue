<template>
    <div class="container">
        <div class="row h-100">
            <div class="col-auto col-md-12 col-sm-12 my-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title text-center py-3">All orders</h5>
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" class="textTable">OrderID</th>
                                        <th scope="col" class="textTable">Status</th>
                                        <th scope="col" class="textTable">Action</th>
                                        <th scope="col" class="textTable">Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" class="textTable">1</th>
                                        <td>
                                            <select class="form-select textTable">
                                                <option selected>Open this select menu</option>
                                                <option value="1" selected>Done</option>
                                                <option value="2">Preparing</option>
                                                <option value="3">Pending</option>
                                            </select>
                                        </td>
                                        <td><img class="icon mt-1" src="@/assets/delete.svg"> &nbsp; <img class="icon mt-1" src="@/assets/edit.svg"></td>
                                        <td class="textTable">30-09-2021 13:20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="textTable">2</th>
                                        <td>
                                            <select class="form-select textTable">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Done</option>
                                                <option value="2" selected>Preparing</option>
                                                <option value="3">Pending</option>
                                            </select>
                                        </td>
                                        <td><img class="icon mt-1" src="@/assets/delete.svg"> &nbsp; <img class="icon mt-1" src="@/assets/edit.svg"></td>
                                        <td class="textTable">30-09-2021 14:20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" class="textTable">3</th>
                                        <td>
                                            <select class="form-select textTable">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Done</option>
                                                <option value="2">Preparing</option>
                                                <option value="3" selected>Pending</option>
                                            </select>
                                        </td>
                                        <td><img class="icon mt-1" src="@/assets/delete.svg"> &nbsp; <img class="icon mt-1" src="@/assets/edit.svg"></td>
                                        <td class="textTable">30-09-2021 15:22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Orders'
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
</style>