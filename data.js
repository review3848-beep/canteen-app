// ====== เมนูตัวอย่าง (แก้ไขได้) ======
const MENU = [
  { id: 1, name: "ข้าวกะเพรา", price: 40 },
  { id: 2, name: "ข้าวผัด", price: 35 },
  { id: 3, name: "ก๋วยเตี๋ยว", price: 30 },
  { id: 4, name: "น้ำเปล่า", price: 10 }
];

// ====== Storage Keys ======
const KEY_ORDERS = "canteen_orders_v1";

function getOrders(){
  return JSON.parse(localStorage.getItem(KEY_ORDERS) || "[]");
}
function saveOrders(orders){
  localStorage.setItem(KEY_ORDERS, JSON.stringify(orders));
}

function money(n){
  return "฿" + Number(n || 0).toFixed(0);
}

function formatDT(value){
  if(!value) return "-";
  // value is datetime-local string: "YYYY-MM-DDTHH:mm"
  const d = new Date(value);
  if(isNaN(d.getTime())) return value;
  return d.toLocaleString("th-TH", { dateStyle:"short", timeStyle:"short" });
}

// สถานะมาตรฐาน
const STATUS = {
  PENDING: "รอทำ",
  COOKING: "กำลังทำ",
  READY: "พร้อมรับ",
  PICKED: "รับแล้ว",
  CANCEL: "ยกเลิก"
};
