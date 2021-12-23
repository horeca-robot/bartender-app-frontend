<template>
    <main>
        <div class="container">
            <div class="row h-100">
                <div class="col-auto col-md-12 col-sm-12 my-3">
                    <div class="card h-100 primary-color text-color">
                        <div class="card-body">
                            <h5 class="card-title">Notifications</h5>
                            <div v-for="(notification, index) in notifications" :key="index">
                                <div class="card border my-3 primary-color">
                                    <div class="card-body">
                                        <h5 class="card-title">Help needed:</h5>
                                        <p class="card-text">Table number: {{ notification.table.tableNumber }}</p>
                                        <p class="card-text">ID: {{ notification.id }}</p>
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

const notificationService = new NotificationService();

export default {
    name: 'NotificationsOverview',
    components: {
    },
    data()
    {
        return {
            notifications: [],
        }
    },
    methods: {
        async getNotifications() {
            this.notifications = await notificationService.getAll();
        },
    },
    mounted: function() {
        this.getNotifications();
    }
}
</script>

<style scoped>
</style>
