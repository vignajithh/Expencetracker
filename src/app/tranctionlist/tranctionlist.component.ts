import { Component, OnInit } from '@angular/core';
import { ExpenceService } from '../services/expence.service';

@Component({
  selector: 'app-tranctionlist',
  templateUrl: './tranctionlist.component.html',
  styleUrls: ['./tranctionlist.component.css']
})
export class TranctionlistComponent implements OnInit {
  transactions:any


  constructor(private service:ExpenceService){
    // this.service.getTransaction().subscribe(data=>{
    //   this.transactions=data
    // })
    this.service.relodRequired.subscribe(data=>{
      this.ngOnInit()
    })

  }
  ngOnInit(){
    this.service.getTransaction().subscribe(data=>{
      this.transactions=data
    })
  }

  deleteTransaction(id:number){
    this.service.destroyTransation(id).subscribe(data=>{
      // console.log(data);
      this.ngOnInit()
      
    })

  }
  emitTransactionid(id:number){
    this.service.dispatchTransaction(id)
  }



}
