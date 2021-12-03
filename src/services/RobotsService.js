export default class
{
    /**
     * Retrieves all entities.
     *
     * @return Array
     */
    async getAll()
    {
        return [
            {
                id: 1,
                name: 'Robot 1',
                status: 0,
                battery: 68
            },
            {
                id: 2,
                name: 'Robot 2',
                status: 0,
                battery: 22
            }
        ];
    }

    /**
     * Retrieves a specific entity by ID
     *
     * @return null, Object
     */
    async getByID(id)
    {
        const robots = this.getAll();

        for(const robot of robots) {
            if(robot.id == id)
                return robot;
        }

        return null;
    }

    /**
     * Creates a new entity.
     *
     * @return true, false
     */
     async create(entity)
     {
         entity;
         return true;
     }

    /**
     * Updates a specific entity by ID
     *
     * @return true, false
     */
    async update(entity)
    {
        entity;
        return true;
    }

    /**
     * Deletes an entity by ID.
     *
     * @return true, false
     */
     async delete(entityId)
     {
        const robots = this.getAll();

        for(const robot of robots) {
            if(robot.id == entityId)
                return true;
        }

        return false;
     }

     async stop(id)
     {
        console.log(id);
        return true;
     }
}
