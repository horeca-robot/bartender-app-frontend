import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

const entity = 'order';

export default {
    /**
     * Retrieves all available status codes from the order
     *
     * @return Array
     */
    async getStatusses(type = 'delivery')
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}/statusses/${type}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    },

    /**
     * Retrieves all orders
     *
     * @return Array
     */
    async getOrders()
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    },

    /**
     * Retrieves a specific order by ID
     *
     * @return null, Object
     */
    async getOrderById(orderID)
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}/${orderID}`));

        if(error !== null) {
            return null;
        }

        return response.data;
    },

    async updateOrder(order)
    {
        const [,error] = await Request(AxiosClient.put(`/${entity}/${order.id}`, order));

        if(error !== null) {
            return false;
        }

        return true;
    }
}
