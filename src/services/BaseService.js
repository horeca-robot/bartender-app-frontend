import Request from "./Request";
import getAxiosConfig from "./Client/AxiosClient";

export default class
{
    _entityType = '';
    _requestClient = null;

    constructor(entityType, jwt)
    {
        this._entityType = entityType;
        this._requestClient = getAxiosConfig(jwt);
    }

    /**
     * Retrieves all entities.
     *
     * @return Array
     */
    async getAll(page = 0, size = 2)
    {
        const [response, error] = await Request(this._requestClient.get(`/${this._entityType}?page=${page}&size=${size}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    }

    /**
     * Retrieves a specific entity by ID
     *
     * @return null, Object
     */
    async getByID(id)
    {
        const [response, error] = await Request(this._requestClient.get(`/${this._entityType}/${id}`));

        if(error !== null) {
            return null;
        }

        return response.data;
    }

    /**
     * Creates a new entity.
     *
     * @return true, false
     */
     async create(entity)
     {
         const [,error] = await Request(this._requestClient.post(`/${this._entityType}`, entity));

         if(error !== null) {
             return false;
         }

         return true;
     }

    /**
     * Updates a specific entity by ID
     *
     * @return true, false
     */
    async update(entity)
    {
        if(entity.id == undefined) {
            throw new Error("Given entity must have an 'id' field");
        }

        const [,error] = await Request(this._requestClient.put(`/${this._entityType}/${entity.id}`, entity));

        if(error !== null) {
            return false;
        }

        return true;
    }

    /**
     * Deletes an entity by ID.
     *
     * @return true, false
     */
     async delete(entityId)
     {
        const [,error] = await Request(this._requestClient.delete(`/${this._entityType}/${entityId}`));

        if(error !== null) {
            return false;
        }

        return true;
     }
}
