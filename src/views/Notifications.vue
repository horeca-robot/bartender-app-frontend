<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card h-100 primary-color text-color">
                        <div class="card-body">
                            <h5 class="card-title">Notifications</h5>
                            <div v-if="notifications.length == 0" class="my-3">No notifications received</div>
                            <div v-for="(notification, index) in notifications" :key="index">
                                <div class="card border my-3 primary-color">
                                    <div class="card-body">
                                        <h5 class="card-title">Help needed: {{ notification.reason }}</h5>
                                        <p class="card-text">Description: {{ notification.description }}</p>
                                        <p class="card-text">Table number: {{ notification.tableNumber }}</p>
                                    </div>
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
import NotificationService from '@/services/NotificationService.js';
import TableService from '@/services/TableService.js';
import AuthService from '@/services/AuthService.js';

const authService = new AuthService(null);
const tableService = new TableService(authService.getLocalJWT());

export default {
    name: 'NotificationsOverview',
    components: {
    },
    data()
    {
        return {
            notifications: [],
            intervalHandler: null
        }
    },
    methods: {
        async getNotifications() {

            const newMessageReceived = NotificationService.hasNewMessages();
            console.log(`new MSG:: ${newMessageReceived}`);

            if(!newMessageReceived)
                return;

            const notifications = await NotificationService.getAll();

            this.$data.notifications = [];

            for(let notification of notifications) {
                console.log(notification);
                console.log(table);
                const table = await tableService.getByID(notification.tableId);

                if(table !== null) {
                    notification.tableNumber = table.tableNumber;
                    this.$data.notifications.push(notification);
                }
            }
        },
    },
    mounted: function() {
        const getNotifications = this.getNotifications;
        if(this.$data.intervalHandler == null) {
            this.$data.intervalHandler = setInterval(() => {
                getNotifications();    
            }, 2000);
        }

    },
    beforeDestroy()
    {
        clearInterval(this.$data.intervalHandler);
    }
}
</script>

<style scoped>
</style>
