/*
Cau 1:

var trai = 00;
var phai = 00;
let timeID;
var min = document.getElementById("minutes");
var sec = document.getElementById("second");

function Lap() {
    phai++;
    if (phai <= 9)
        sec.innerHTML = "0" + phai;
    else sec.innerHTML = phai;

    if (phai > 99) {
        sec.innerHTML = "00";
        phai = 0;
        trai++;
    }

    if (trai <= 9)
        min.innerHTML = "0" + trai;
    else min.innerHTML = trai;


}

function Start() {
    clearInterval(timeID);
    timeID = setInterval(Lap, 10);
}
function Stop() {
    clearInterval(timeID);

}
function Reset() {
    clearInterval(timeID);
    trai = 0;
    phai = 0;
    min.innerHTML = "00";
    sec.innerHTML = "00";

}

*/



// function Cau2(){
//     var time= new Date();
//     var gio= time.getHours();
//     var phut= time.getMinutes();
//     var giay= time.getSeconds();
//     var buoi= "AM";
    
//     if(gio>12) {
//         buoi="PM";
//         gio="0"+(gio-12);
//     }
//     if (phut<10) phut="0"+phut;
//     if(giay<10) giay="0"+giay;
//     document.getElementById("gio").innerHTML=gio;
//     document.getElementById("phut").innerHTML=phut;
//     document.getElementById("giay").innerHTML=giay;
//     document.getElementById("buoi").innerHTML=buoi;

//     setTimeout(Cau2,1000);
// }

// Cau2();
// function xuLy(){
//     // var x = document.myform.email.value;
//     //     var atposition = x.indexOf("@");
//     //     var dotposition = x.lastIndexOf(".");
//     //     if (atposition < 1 || dotposition < (atposition + 2)
//     //             || (dotposition + 2) >= x.length) {
//     //         alert("Please enter a valid e-mail address.");
//     //         return false;
//     //     }
//     var email=document.getElementById("email").value;
//     var pass=document.getElementById("password").value;

//     if(email=='' || pass=='')
//     {
//         document.getElementById("kiemTra").innerHTML="Email và password không được để trống!";
//     }

//     if(email=="binh@gmail.com" && pass=="1234")
//         document.getElementById("kiemTra").innerHTML="Đăng nhập thành công!";
//     else document.getElementById("kiemTra").innerHTML="Email hoặc password không đúng";
//     const endpoint = 'https://www.gov.uk/bank-holidays.json';
//     document.getElementById("kiemTra").innerHTML=fetch(endpoint);
//     console.log(fetch(endpoint));

// }

function docJson(file, callback)
{
    var rawFile= new XMLHttpRequest;
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange= function(){
        if(rawFile.readyState===4 && rawFile.status=="200")
        {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

docJson("test.json", function(text){
    var data= JSON.parse(text);
    document.getElementById("name").innerHTML=data.name;
    document.getElementById("age").innerHTML=data.age;
    document.getElementById("address").innerHTML=data.address;
});
