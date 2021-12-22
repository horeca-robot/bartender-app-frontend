import BaseService from "./BaseService";
import Request from "./Request";

export default class extends BaseService
{
    constructor(jwt)
    {
        super('order', jwt);
    }

    /**
     * Retrieves all available status codes from the order
     *
     * @return Array
     */
    async getDeliveryStatusses()
    {
        const [response, error] = await Request(this._requestClient.get(`/${this._entityType}/status/delivery`));

        if(error !== null) {
            return [];
        }

        return response.data;
    }
}
