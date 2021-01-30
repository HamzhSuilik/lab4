var request=prompt("What you want to buy: -phone- or -laptop-");
var Quantity=prompt("Enter the required quantity");

var price;

if (request =="phone"){
    price=Quantity * 150;
  }

  if (request =="laptop"){
    price=Quantity * 500;
  }


  var Discount="5%";

  if (price>=2000){
    var Discount="50%";
  }
  else if (price>=1500){
    var Discount="40%";
  }
  else if (price>=1000){
    var Discount="30%";
  }
  else if (price>=500){
    var Discount="20%";
  }
  else if (price>=200){
    var Discount="10%";
  }
  
  
  


  document.getElementById("request").innerText=request;
  document.getElementById("Quantity").innerText=Quantity;
  document.getElementById("price").innerText=price;
  document.getElementById("Discount").innerText=Discount;