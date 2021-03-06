const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];

/* 1. Tạo menu với các mục xem danh sách, thêm người dùng
 xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id */
const obj={

    //Hien thi danh sach người dùng
    Display : function(){
        console.log("Hiển thị danh sách: ");
        /*  Cach 1:
       users.forEach(element => {
         console.log(element);
       });
       */
      //Cach 2:
       const getAllUsers = (users) => console.log(users);
       getAllUsers(users);
    },

    //Thêm người dùng
    insertPerson : function(){
        users.push({ id: 5, name: "Hoàng Minh Huệ", age: 19, gender: "female", money: 10000});
    },
    // Xóa người dùng theo id
    deletePerson : function(){  
          for(let i in users){
             if (users[i].id==1){
          users.splice(i,i+1);
        }
      }     
    },
    // Cập nhật thông tin người dùng theo id
    updatePerson : function(){
       for(let i in users){
           if (users[i].id==5){
              users[i].money+=10000;
              users[i].name+=" xinh gái :)";
              users[i].age=9;
            }
        }
    }
};
//Menu
let select;
function Menu(select){
     switch(select){
       case 1:{
         obj.Display();
         break;
       }
       case 2:{
         obj.insertPerson();
         break;
       }
       case 3:{
         obj.deletePerson();
         break;
       }
       case 4:{
         obj.updatePerson();
         break;
       }
     }
}

function ThongKe(){
  //Them 2 nguoi vao mang
  users.push({ id: 7, name: "Minh Phương Đỗ", age: 20, gender: "female", money: 10000});
  users.push({ id: 6, name: "Nguyễn Văn A", age: 3, gender: "male", money: 400});
  console.log("===Danh sách sau khi thêm 2 người===");
  Menu(1);
  var countMale=0,countAge=0,countMoney=0;
  for(let i in users){
      if (users[i].gender=="male")
          countMale++;
      if (users[i].age>=15)
         countAge++;
      if (users[i].id % 2==0)
         countMoney+=users[i].money;
      if (users[i].money>max)
         max=users[i].money;
      if (users[i].money<min)
         min=users[i].money;
  }
  console.log("=====THONG KE =====");
  console.log(`So nam la: ${countMale} \n`);
  console.log(`So nguoi co tuoi lon hon 15: ${countAge} \n`);
  console.log(`Tong tien nhung nguoi co id chan: ${countMoney} `);
  
  //Find money max
  var max = Math.max(...users.map(element => element.money));
  var min = Math.min(...users.map(element=> element.money));
  users.forEach(element =>{
    if (element.money === max)
       console.log(`${element.name} is the richest`);
    if (element.money === min)
       console.log(`${element.name} is the poorest`);
  })

}
// Chuyển giới tính nam sang nữ
function ChangeGender(){
  for(let i in users){
    if (users[i].gender=="male")
       users[i].gender="female";
  }
  
}

console.log("===Hiển thị danh sách users ban đầu ===");
Menu(1); //Hien thi
ThongKe();
Menu(2); //Them nguoi dung
Menu(3); //Xoa nguoi dung
Menu(4); //Cap nhat thong tin nguoi dung
console.log("===Danh sách sau khi thêm, xóa, cập nhật thông tin===");
Menu(1);
ThongKe(); //Thống kê nam, tổng tiền id chẵn, người giàu nhất, nghèo nhất
ChangeGender(); //Change nam thành nữ
console.log("======Sau khi đổi giới tính=======");
Menu(1);
