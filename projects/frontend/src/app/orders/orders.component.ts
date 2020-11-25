import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private authservice: AuthService,private toastr:ToastrService ) { }

  ngOnInit(): void {
    this.listOrders();
  }
  orders: any;
  listOrders() {
    this.authservice.getOrders().subscribe(res => {
      this.orders = res;
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
      
      this.orders=res;
      console.log(res);
    })
    
  }
}
