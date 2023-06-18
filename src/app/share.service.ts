import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
readonly APIUrl="http://127.0.0.1:8000";
  
constructor(private http:HttpClient) { }

getCatList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Category/');
}
addcategory(val:any){
  return this.http.post(this.APIUrl + '/Category/',val);
}

updatecategory(val:any){
  return this.http.put(this.APIUrl + '/Category/',val);
}

deletecategory(val:any){
  return this.http.delete(this.APIUrl + '/Category/'+val);
}


getProductList():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/product/');
}

addproduct(val:any){
  return this.http.post(this.APIUrl + '/product/',val);
}

updateproduct(val:any){
  return this.http.put(this.APIUrl + '/product/',val);
}

deleteproduct(val:any){
  return this.http.delete(this.APIUrl + '/product/'+val);
}

getAllcategoryNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/Category/');
}


}



