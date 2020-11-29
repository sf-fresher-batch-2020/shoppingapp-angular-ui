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
  login(user){
    let url = this.apiUrl+"/users/login";
  
    return this.http.post<any>(url,user);
  }
  getProducts(){
    return this.http.get<any>(this.apiUrl+"/products");
   
    }
  getUsers(){
    return this.http.get<any>(this.apiUrl+"/users");
   
    }
    getOrders(){
      return this.http.get<any>(this.apiUrl+"/orders");
     
      }
      getMyOrders(user_id){
        return this.http.get<any>(this.apiUrl+"/myorders?user_id="+user_id);
       
        }
    updateStatus(id,obj){
      let url = this.apiUrl+"/orders/"+id;
      return this.http.patch<any>(url,obj);
     
    }
    addOrder(orderObj){
      let url = this.apiUrl+"/orders/";
      return this.http.post<any>(url,orderObj);
    }
    storeLogindetails(user){

      localStorage.setItem("loggedInUser",JSON.stringify(user));
    }
}
