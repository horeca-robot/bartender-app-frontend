import BaseService from "./BaseService";

export default class extends BaseService
{
    constructor(jwt)
    {
        super('product', jwt);
    }
}
