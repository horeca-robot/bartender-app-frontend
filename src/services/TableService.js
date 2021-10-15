import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

const entity = 'restaurantTable';

export default {
    /**
     * Retrieves all orders
     *
     * @return Array
     */
    async getAll()
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    },
}
