export default {
    getList(){
        let data = [
            {
                "id": 1,
                "name": "Hamburger",
                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                "price": 12.00,
                "discount_price": 9.60,
                "description": "Hamburger with a 250g beef patty.",
                "alcohol": false,
                "byProduct": [
                    {
                        "id": 2,
                        "name": "Fries",
                        "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                        "price": 4.00,
                        "discount_price": 2.60,
                        "description": "Crispy salted french fries.",
                        "alcohol": false,
                        "byProduct": []
                    }
                ]
            },
            {
                "id": 2,
                "name": "Friet",
                "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                "price": 7.00,
                "discount_price": 6.50,
                "description": "test description",
                "alcohol": false,
                "byProduct": [
                    {
                        "id": 5,
                        "name": "Mayo",
                        "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                        "price": 1.00,
                        "discount_price": 0.50,
                        "description": "Sauce.",
                        "alcohol": false,
                        "byProduct": []
                    },
                    {
                        "id": 6,
                        "name": "Ketchup",
                        "img": "https://i.imgur.com/Zq0iBJK.jpeg",
                        "price": 1.00,
                        "discount_price": 0.50,
                        "description": "Sauce.",
                        "alcohol": false,
                        "byProduct": []
                    },
                ]
            },
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

        return data;
    },

    getProducts() {
        return this.getList();
    },
}
