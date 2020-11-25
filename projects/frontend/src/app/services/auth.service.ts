import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl:string;
  constructor(private http: HttpClient) { 
    this.apiUrl =  environment.API_URL;
    console.log(this.apiUrl);
    
  }
  users: any;

  getUsers(){
    return this.http.get<any>(this.apiUrl+"/users");
   
    }
    getOrders(){
      return this.http.get<any>(this.apiUrl+"/orders/");
     
      }
    updateStatus(id,obj){
      let url = this.apiUrl+"/orders/"+id;
      return this.http.patch<any>(url,obj);
     
    }
    storeLogindetails(user){

      localStorage.setItem("loggedInUser",JSON.stringify(user));
    }
}
