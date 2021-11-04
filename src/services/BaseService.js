import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

export default class
{
    _entityType = '';

    constructor(entityType)
    {
        this._entityType = entityType;
    }

    /**
     * Retrieves all entities.
     *
     * @return Array
     */
    async getAll()
    {
        const [response, error] = await Request(AxiosClient.get(`/${this._entityType}`));

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
        const [response, error] = await Request(AxiosClient.get(`/${this._entityType}/${id}`));

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
         const [,error] = await Request(AxiosClient.post(`/${this._entityType}`, entity));
 
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

        const [,error] = await Request(AxiosClient.put(`/${this._entityType}/${entity.id}`, entity));

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
        const [,error] = await Request(AxiosClient.delete(`/${this._entityType}/${entityId}`));

        if(error !== null) {
            return false;
        }

        return true;
     }
}
