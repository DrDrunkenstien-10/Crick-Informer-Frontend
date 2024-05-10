import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points-table.component.html',
  styleUrl: './points-table.component.css'
})
export class PointsTableComponent implements OnInit{
  pointsTable: any;
  tableHeading: any
  team: any

  constructor(private _api:ApiCallService){}
  
  ngOnInit(): void {
    this._api.getPointsTable().subscribe({
      next:data =>{
        this.pointsTable=data
        console.log(this.pointsTable)
        this.tableHeading=[...this.pointsTable[0]]
        console.log(this.tableHeading)
      },
      error:error =>{
        console.log(error)
      }
    })
  }
}
