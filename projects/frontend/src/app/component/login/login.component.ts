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
    console.log(form.value);
    let exists = false;
    if(this.email == "admin@gmail.com" && this.password == "pass123"){ 
     exists = true;
    if(exists){
      let loggedInUser = {id:1,name:"admin",role:"ADMIN"}
        this.userservice.storeLogindetails(loggedInUser);
        if(loggedInUser.role=="ADMIN"){
          this.toastr.success("ADMIN LOGGED IN");
          this.router.navigate(['orders']);
        }
        
      }
     
      
    }
    else{
      this.toastr.error("Invalid Credentials");
    
    }
  }
}