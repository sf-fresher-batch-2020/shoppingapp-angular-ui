import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService, private userService: AuthService) { }

  ngOnInit(): void {
  }
  username: string;
  public email: string;
  password: string;

  register(form:NgForm){
    
    let formData={name:this.username,email:this.email, password: this.password, role:"USER"};
    console.log(JSON.stringify(formData));
    this.userService.register(formData).subscribe(res =>{
      console.log(res);
      this.toastr.success("Registered");
      form.reset();
      this.router.navigate(["login"]); // redirects to login
    });
  }

}
