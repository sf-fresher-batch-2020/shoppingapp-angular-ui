import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(private authservice: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  products: any;
  
  items = [];
  listProducts() {
    this.authservice.getProducts().subscribe(res => {
      this.products = res;
      console.log(res);
    });

  }

  categories;
  range;
  removeItem(i){
    this.items.splice(i,1);
    localStorage.setItem("items", (JSON.stringify(this.items)));
  }

  getTotalPrice(){
    let total = 0;
    for(let item of this.items)
    {
      total = total + item.quantity * item.price;
    }
    return total;
  }
  addToCart(p) {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("user", user);
    let item = {

      id: p.product_id,
      name: p.product_name,
      price: p.product_price,
      quantity: 1,
      createdBy: user.id
    };

    console.log(item);
    this.items = JSON.parse(localStorage.getItem("items")) || [];
    let index = this.items.findIndex(obj => obj.id == p.product_id); //It will return index = 1

    if (index == -1) {
      this.items.push(item);


    }
    else {
      let selecteditem = this.items[index];

      selecteditem.quantity = selecteditem.quantity + 1;

      this.items[index] = selecteditem;



    }
    this.toastr.success("Item added to cart");
    localStorage.setItem("items", (JSON.stringify(this.items)));


  }

  placeOrder() {
    console.log("placing an order");
    let linuser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("users", linuser);
    let orderObj = { items: this.items, user_id: linuser.id, createdDate: new Date().toJSON(),status:"ORDERED" };
    if(orderObj != null){
    this.authservice.addOrder(orderObj).subscribe (res=>{
        console.log(res);

        this.toastr.success("order placed successfully");
    localStorage.removeItem("items");

    });
  }
  else{
    this.toastr.warning("No Items in Cart");
  }
  }
 clearAll(){
   this.items = [];
 }
}
