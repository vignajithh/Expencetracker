import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ExpenceService } from '../services/expence.service';

@Component({
  selector: 'app-transactionadd',
  templateUrl: './transactionadd.component.html',
  styleUrls: ['./transactionadd.component.css']
})
export class TransactionaddComponent {

  isEdit:boolean=false
  transactionId:any

  categories=['food','fuel','entertainment','bills','rent',"emi",'miscellaneous']

  constructor(private service:ExpenceService){
    this.service.transactionSubject.subscribe((id:any)=>{
      this.transactionId=id
      this.isEdit=true
      this.service.retriveTransaction(id).subscribe(data=>{
        this.transactionfrom.patchValue(data)
      })

    })

  }

  transactionfrom=new FormGroup({
    title:new FormControl("",Validators.required),
    type:new FormControl("",Validators.required),
    amount:new FormControl("",Validators.required),
    category:new FormControl("",Validators.required),
    user:new FormControl("",Validators.required)
  })

  createTransction(){
    
    let data=this.transactionfrom.value
    if(this.isEdit==false){
      this.service.addTransaction(data).subscribe(data=>{
        console.log(data);
        this.transactionfrom.reset()
        
      })
    }
    else{
      this.service.updatetransaction(this.transactionId,data).subscribe(data=>{
        console.log(data);
        
      })

    }
    
  }


}
