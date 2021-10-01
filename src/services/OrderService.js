// import axios from "axios"

export default {
    getList(){
        let res = [];

        res.data = [
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
                        "name": "Voorgerecht",
                        "products": [
                            {
                                "id": 11,
                                "name": "Salad",
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
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
                        "name": "Hoofdgerecht",
                        "products": [
                            {
                                "id": 8,
                                "name": "Friet",
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
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
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                                "price": 16.00,
                                "discount_price": 10.50,
                                "description": "Hamburger with beef patty",
                                "alcohol": false,
                                "byProduct": []
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
                        "name": "Voorgerecht",
                        "products": [
                            {
                                "id": 11,
                                "name": "Salad",
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
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
                        "name": "Hoofdgerecht",
                        "products": [
                            {
                                "id": 8,
                                "name": "Friet",
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
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
                                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
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
      return res.data;
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
    }
  }
