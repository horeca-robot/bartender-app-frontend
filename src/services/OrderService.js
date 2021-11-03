import BaseService from "./BaseService";
import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

export default class extends BaseService
{
    constructor()
    {
        super('order');
    }

    /**
     * Retrieves all available status codes from the order
     *
     * @return Array
     */
    async getDeliveryStatusses()
    {
        const [response, error] = await Request(AxiosClient.get(`/${this._entityType}/status/delivery`));

        if(error !== null) {
            return [];
        }

        return response.data;
    }
}
