const case1 = "    hOang Bui   "; // -> Hoang Bui
const case2 = " hOANG      BUI   hOang     "; // -> "Hoang Bui Hoang"
const case3 = "23traN    dUOng23     "; // -> "Tran Duong"

function Change(name) {
    name = name.trim().toLowerCase();//xóa khoảng trắng, viết thường
    name = name.replace(/\d/g, '');// xóa ký tự số
    name = name.replace(/\s+/g, ' ');// xóa khoảng trắng ở giữa

    name = name.split(' ').map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1); 
    }).join(' ');
    console.log(name);
}
Change(case1);
Change(case2);
Change(case3);
