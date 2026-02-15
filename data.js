// เมนูตัวอย่าง
const MENU = [
{id:1,name:"ข้าวกะเพรา",price:40},
{id:2,name:"ข้าวผัด",price:35},
{id:3,name:"ก๋วยเตี๋ยว",price:30}
];

function getOrders(){
return JSON.parse(localStorage.getItem("orders")||"[]");
}

function saveOrders(data){
localStorage.setItem("orders",JSON.stringify(data));
}
