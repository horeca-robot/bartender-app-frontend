import BaseService from "./BaseService";

export default class extends BaseService
{
    constructor()
    {
        super('robot');
    }

    /**
     * Retrieves all entities.
     *
     * @return Array
     */
    async getAllMock()
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
    async getByIDMock(id)
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
     async createMock(entity)
     {
         entity;
         return true;
     }

    /**
     * Updates a specific entity by ID
     *
     * @return true, false
     */
    async updateMock(entity)
    {
        entity;
        return true;
    }

    /**
     * Deletes an entity by ID.
     *
     * @return true, false
    */
    async deleteMock(entityId)
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

    async sendToTable(robotId, tableNumber)
    {
        console.log("Sending robot " + robotId + " to table " + tableNumber);
    }

    async getRobotFromOrder(orderId)
    {
        console.log("getting robot from order: " + orderId);
        return {
            id: 1,
            name: 'Robot 1',
            status: 0,
            battery: 68
        }
    }

}
