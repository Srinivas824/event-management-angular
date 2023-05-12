import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
 
  booking:any;
  editObject: any;
  constructor(private service:EventService){
    this.booking="";
    this.editObject={bookingId:'',customerId:'',equipmentId:'',bookingDate:''}
  }
  ngOnInit(): void {
   this.service.getAllBookings().subscribe((data:any)=>{
    this.booking=data;
    console.log(data);
   });
  }

}
