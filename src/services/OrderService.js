import Request from "./Request";
import AxiosClient from "./Client/AxiosClient";

const entity = 'order';

export default {
    /*
    getList(){
        let data = [
            {
                "id": 3,
                "subtotal": 70.0,
                "payment_status": "paid",
                "status": "Done",
                "alcohol": false,
                "created_at": "30-09-2021 14:52",
                "robot_id": 4,
                "courses": [
                    {
                        "id": 1,
                        "index": 1,
                        "name": "Appetizer",
                        "products": [
                            {
                                "id": 11,
                                "name": "Salad",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg",
                                "price": 10.00,
                                "discount_price": 6.50,
                                "description": "Nice salad with cucumber",
                                "alcohol": false,
                                "byProduct": [ ]
                            },
                        ]
                    },
                    {
                        "id": 2,
                        "index": 2,
                        "name": "Main Course",
                        "products": [
                            {
                                "id": 8,
                                "name": "Friet",
                                "img": "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
                                "price": 7.00,
                                "discount_price": 6.50,
                                "description": "test description",
                                "alcohol": false,
                                "byProduct": [
                                    {
                                        "id": 8,
                                        "name": "Mayo",
                                        "price": 5.00,
                                    },
                                    {
                                        "id": 8,
                                        "name": "Ketchup",
                                        "price": 3.00,
                                    },
                                ]
                            },
                            {
                                "id": 10,
                                "name": "Hamburger",
                                "img": "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg",
                                "price": 16.00,
                                "discount_price": 10.50,
                                "description": "Hamburger with beef patty",
                                "alcohol": false,
                                "byProduct": []
                            },
                        ]
                    },
                    {
                        "id": 8,
                        "index": 3,
                        "name": "Dessert",
                        "products": [
                            {
                                "id": 16,
                                "name": "Icecream",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
                                "price": 5.00,
                                "discount_price": 4.50,
                                "description": "Vanilla icecream with chocolate sauce",
                                "alcohol": false,
                                "byProduct": [ ]
                            },
                        ]
                    },
                ]
            },
            {
                "id": 4,
                "subtotal": 199.0,
                "payment_status": "paid",
                "status": "Preparing",
                "alcohol": true,
                "created_at": "30-09-2021 15:32",
                "robot_id": 5,
                "courses": [
                    {
                        "id": 1,
                        "index": 1,
                        "name": "Appetizer",
                        "products": [
                            {
                                "id": 11,
                                "name": "Salad",
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg",
                                "price": 10.00,
                                "discount_price": 6.50,
                                "description": "Nice salad with cucumber",
                                "alcohol": false,
                                "byProduct": [ ]
                            },
                        ]
                    },
                    {
                        "id": 2,
                        "index": 2,
                        "name": "Main Course",
                        "products": [
                            {
                                "id": 8,
                                "name": "Friet",
                                "img": "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
                                "price": 7.00,
                                "discount_price": 6.50,
                                "description": "Test description",
                                "alcohol": false,
                                "byProduct": [
                                    {
                                        "id": 8,
                                        "name": "Mayo",
                                        "price": 5.00,
                                    },
                                    {
                                        "id": 8,
                                        "name": "Ketchup",
                                        "price": 3.00,
                                    },
                                ]
                            },
                            {
                                "id": 10,
                                "name": "Hamburger",
                                "img": "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg",
                                "price": 16.00,
                                "discount_price": 10.50,
                                "description": "Hamburger with beef patty",
                                "alcohol": false,
                                "byProduct": []
                            },
                            {
                                "id": 11,
                                "name": "Bier",
                                "img": "https://www.drinks4you.eu/wp-content/uploads/2021/05/091501.-600x600.jpg",
                                "price": 4.00,
                                "discount_price": 0.00,
                                "description": "Corona bier",
                                "alcohol": true,
                                "byProduct": []
                            }
                        ]
                    },
                ]
            },
        ]
      return data;
    },

    getOrders() {
      return this.getList();
    },

    getOrderById(id){
        let list = this.getList();
        let orderToReturn = [];

        list.forEach(element => {
            if(element.id == id){
                orderToReturn = element;
            }
        });

        return orderToReturn;
    },
    */

    /**
     * Retrieves all available status codes from the order
     *
     * @return Array
     */
    async getStatusses(type = 'payment')
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}/statusses/${type}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    },

    /**
     * Retrieves all orders
     *
     * @return Array
     */
    async getOrders()
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}`));

        if(error !== null) {
            return [];
        }

        return response.data;
    },

    /**
     * Retrieves a specific order by ID
     *
     * @return null, Object
     */
    async getOrderById(orderID)
    {
        const [response, error] = await Request(AxiosClient.get(`/${entity}/${orderID}`));

        if(error !== null) {
            return null;
        }

        return response.data;
    },

    async updateOrder(order)
    {
        const [,error] = await Request(AxiosClient.put(`/${entity}/${order.id}`, order));

        if(error !== null) {
            return false;
        }

        return true;
    }
}
