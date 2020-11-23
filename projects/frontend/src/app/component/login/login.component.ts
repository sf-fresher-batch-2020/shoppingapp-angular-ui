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
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      let users: any=res;
      let exists= false;
      let loggedInUser=null;
      for(let obj of users){
        if(obj.email==this.email && obj.password==this.password){
          exists=true;
          delete obj["password"];
          loggedInUser=obj;
          break;
        }
      }

      if(exists){
        this.userservice.storeLogindetails(loggedInUser);
        if(loggedInUser.role=="ADMIN"){
          this.toastr.success("ADMIN LOGGED IN");
          this.router.navigate(['home']);
        }
        else{
          this.toastr.error("Invalid Credentials");
        
        }
      }
      
    })
  }
}