// import axios from "axios"
import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

const entity = 'product';

export default {
    /**
     * Retrieves all products
     *
     * @return Array
     */
    async getProducts()
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    }
}
