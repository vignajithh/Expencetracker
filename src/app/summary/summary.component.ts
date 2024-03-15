import { Component, OnInit } from '@angular/core';
import { ExpenceService } from '../services/expence.service';
import { Chart,registerables } from 'node_modules/chart.js';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  totalIncome=0
  totalExpence=0
  summary:any

  constructor(private service:ExpenceService){
    this.service.relodRequired.subscribe(data=>{
      this.ngOnInit()
    })

  }

  ngOnInit(){
    this.service.transactionSummary().subscribe((data:any)=>{
      // console.log(data);
      this.totalIncome=data.total_income
      this.totalExpence=data.total_expense
      this.summary=data.category_summary

      
    })
  }

}
