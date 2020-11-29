import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private authservice: AuthService,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.listOrders();
  }
  orders: any;
  listOrders() {
    let user=JSON.parse(localStorage.getItem("loggedInUser"));
    this.authservice.getMyOrders(user.id).subscribe(res => {
      let orders :any =res; 

   this.orders=res;
      console.log(res);
    });
  
  }
  cancelOrder(id,status){
    
    let obj = { id: id, status: status };
    this.authservice.updateStatus(id,obj).subscribe(res=>{
    if(status=="CANCELLED"){
        this.toastr.warning("Order Cancelled");
    }
    if(status=="DELIVERED"){
      this.toastr.success("Order Delivered");
    }
      
      this.listOrders();
      console.log(res);
    })
    
  }
}
