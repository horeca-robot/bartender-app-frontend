import BaseService from "./BaseService";
import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

export default class extends BaseService
{
    constructor()
    {
        super('employee');
    }

    /**
     * Log employee in
     *
     * @return Array
    */
    async LogIn(id, employee)
    {
        const [response, error] = await Request(AxiosClient.post(`/${this._entityType}/${id}/login`, employee));

        if(error !== null) {
            return [];
        }

        return response.data;
    }
}
