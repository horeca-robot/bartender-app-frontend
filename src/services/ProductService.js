import BaseService from "./BaseService";

export default class extends BaseService
{
    constructor()
    {
        super('product');
    }
    
    /*
    getList(){
        let data = [
            {
                "id": 1,
                "name": "Hamburger",
                "image": "https://assets.biggreenegg.eu/app/uploads/2019/03/28145521/topimage-classic-hamburger-2019m04-800x534.jpg",
                "price": 12.00,
                "discount_price": 9.60,
                "description": "Hamburger with a 250g beef patty.",
                "alcohol": false,
                "byProduct": [
                    {
                        "id": 2,
                        "name": "Fries",
                        "image": "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
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
                "name": "Fries",
                "image": "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
                "price": 7.00,
                "discount_price": 6.50,
                "description": "Crispy salted french fries.",
                "alcohol": false,
                "byProduct": [
                    {
                        "id": 5,
                        "name": "Mayo",
                        "image": "https://i.okokorecepten.nl/recipegroups/themas/sauzen/mayonaise-750.jpg",
                        "price": 1.00,
                        "discount_price": 0.50,
                        "description": "Sauce",
                        "alcohol": false,
                        "byProduct": []
                    },
                    {
                        "id": 6,
                        "name": "Ketchup",
                        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IxOvzQO4LdW3maTtFkgH3igGZ43SnUUFEA&usqp=CAU",
                        "price": 1.00,
                        "discount_price": 0.50,
                        "description": "Sauce",
                        "alcohol": false,
                        "byProduct": []
                    },
                ]
            },
            {
                "id": 11,
                "name": "Salad",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg",
                "price": 10.00,
                "discount_price": 6.50,
                "description": "Nice salad with cucumber",
                "alcohol": false,
                "byProduct": [ ]
            },
        ]

        return data;
    },

    async getAll()
    {
        const [response, error] = Request(AxiosClient.get(`/product/`));

        console.log(response);
        console.log(error);
        // let res = await axios.get("http://localhost:8080/api/v1/product");
        // return res.data;
        // return this.getList();
    },
    */
}
