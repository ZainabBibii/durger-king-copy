import BurgerImg from "../img/cafe/Burger_148.png";
import CakeImg from "../img/cafe/Cake_148.png";
import CookieImg from "../img/cafe/Cookie_148.png";
import DonutImg from "../img/cafe/Donut_148.png";
import FlanImg from "../img/cafe/Flan_148.png";
import FriesImg from "../img/cafe/Fries_148.png";
import HotDogImg from "../img/cafe/Hotdog_148.png";
import IceCreamImg from "../img/cafe/Icecream_148.png";
import PizzaImg from "../img/cafe/Pizza_148.png";
import PopcornImg from "../img/cafe/Popcorn_148.png";
import TakoImg from "../img/cafe/Tako_148.png";
import CokeImg from "../img/cafe/Coke_148.png"


export function getData() {
  return [
    { title: "Pizza", price: 17.99, Image: PizzaImg,id:1  ,description: "hotpizza"},
    { title: "Burger", price: 15, Image: BurgerImg,id:2,  description: "hotpizza"},
    { title: "Cake", price: 3.5, Image: CakeImg ,id:3, description: "hotpizza"},
    { title: "Cookie", price: 13.99, Image: CookieImg,id:4, description: "hotpizza" },
    { title: "Donut", price: 2.5, Image: DonutImg,id:5,description: "hotpizza" },
    { title: "Flan", price: 0.99, Image: FlanImg , id:6, description: "hotpizza" },
    { title: "Fries", price: 1, Image: FriesImg ,id:7, description: "hotpizza" },
    { title: "Hot Dog", price: 3.59, Image: HotDogImg ,id:8, description: "hotpizza" },
    { title: "Ice Cream", price: 2, Image: IceCreamImg ,id:9, description: "hotpizza" },
    { title: "Popcorn", price: 2.23, Image: PopcornImg ,id:10, description: "hotpizza" },
    { title: "Tako", price: 2.3, Image: TakoImg ,id:11, description: "hotpizza" },
    { title: "Coke", price: 2.3, Image: CokeImg ,id:12, description: "hotpizza" },
    
  ];
}
