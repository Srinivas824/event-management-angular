import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  equipment:any;
  constructor(private service:EventService, private router:Router){
    this.equipment='';

  }
  ngOnInit(): void {
    this.service.getImages(this.service.equipmentIdService).subscribe((data:any)=>{
      this.equipment=data;
      console.log(this.equipment);
    })
  }
  // booking(){

  // }
  searchByEventType(value:any){
    console.log(value);
    this.service.searchByEventType(value.search).subscribe((data:any)=>{
      console.log(data);
      this.equipment = data;
    });
    
      }

}
