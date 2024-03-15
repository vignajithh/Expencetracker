import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {
  baseurl="http://127.0.0.1:8000/api/v1/transactions/"

  relodRequired=new Subject()
  transactionSubject=new Subject()

  constructor(private http:HttpClient) { }


  getTransaction(){
    return this.http.get(this.baseurl)
  }
  addTransaction(data:any){
    return this.http.post(this.baseurl,data).pipe(tap(data=>this.relodRequired.next(true)))

    }
  destroyTransation(id:number){
    return this.http.delete(`${this.baseurl}${id}/`).pipe(tap(data=>this.relodRequired.next(true)))
  }
  dispatchTransaction(id:number){
    this.transactionSubject.next(id)
    
  }
  retriveTransaction(id:number){
    return this.http.get(`${this.baseurl}${id}/`)

  }
  updatetransaction(id:any,data:any){
    return this.http.put(`${this.baseurl}${id}/`,data).pipe(tap(data=>this.relodRequired.next(true)))

  }
  transactionSummary(){
    return this.http.get(`${this.baseurl}summary/`)
  }

  


  }

