<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title text-center d-inline-block">Robots</h5>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="textTable">Robot name</th>
                                            <th scope="col" class="textTable">Status</th>
                                            <th scope="col" class="textTable">Action</th>
                                            <th scope="col" class="textTable">Battery level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="robot in robots" :key="robot.id">
                                            <th scope="row" class="textTable">{{ robot.name }}</th>
                                            <th scope="row" class="textTable">{{ getRobotStatus(robot.status) }}</th>
                                            <th scope="row" class="textTable">
                                                <img class="icon mt-1" @click="emergencyStop(robot.id)" src="/assets/img/stop.png">
                                            </th>
                                            <th scope="row" class="textTable">{{ robot.battery }}%</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import RobotService from './../services/RobotsService';

const robotService = new RobotService();

export default {
    name: 'Robots',
    data()
    {
        return {
            robots: []
        }
    },
    methods: {
        getRobotStatus(rawStatus)
        {
            let robotStatus = rawStatus;

            switch(rawStatus) {
                case 0:
                    robotStatus = "Available";
                    break;

                case 1:
                    robotStatus = "Stopped";
                    break;

                case 2:
                    robotStatus = "Returning";
                    break;

                case 3:
                    robotStatus = "Traveling";
                    break;

                case 4:
                    robotStatus = "Restarting";
                    break;

                case 5:
                    robotStatus = "Out of battery";
                    break;
            }

            return robotStatus;
        },
        async getAllRobots()
        {
            this.$data.robots = await robotService.getAll();
        },
        async emergencyStop(id)
        {
            const response = await robotService.stop(id);
            if(response == true) {
                alert("Robot with id " + id + " stopped.");
            }
            else {
                alert("failed to stop robot with id " + id + "!");
            }
        }
    },
    mounted()
    {
        this.getAllRobots();
    }
}
</script>

<style>

</style>
