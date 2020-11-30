import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private router: Router,private toastr:ToastrService,private userservice: AuthService) { }
  ngOnInit(): void {
  }
  login(form:NgForm){
    let user= {email:this.email,password:this.password};
    this.userservice.login().subscribe(res=>{
      if(!res['message']){
        let loggedInUser = res;
          this.userservice.storeLogindetails(loggedInUser);
          if(loggedInUser.role=="ADMIN"){
            this.toastr.success("ADMIN LOGGED IN");
            //this.router.navigate(['orders']);
            window.location.href="orders";
          }
          else{
            this.toastr.success("USER LOGGED IN");
            window.location.href="products";
            //this.router.navigate(['products']);
          }
        }
        else{
          this.toastr.error("Invalid Credentials");
        
        }
    })
    
    
  }
}