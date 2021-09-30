// import axios from "axios"

export default {
    getOrders() {
      let res = [];

      res.data = [
          {
              "id": 3,
              "subtotal": 70.0,
              "payment_status": "paid",
              "created_id": "2021-09-22T09:15:15.918+00:00",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
              "created_id": "2021-09-22T09:15:15.918+00:00",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
                              "img": "https://imgur.com/gallery/cnu2RrM",
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
      ]

      console.log(res.data);
      return res.data;
    },
  }
