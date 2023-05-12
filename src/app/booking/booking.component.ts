import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  bookingDate:string;

  constructor(private service : EventService,private router :Router){
  
    this.bookingDate='';
  }
  ngOnInit(): void {
    
  }
  BookingFormSubmit(bookingForm: any){
    this.service.addBooking(bookingForm).subscribe();
    alert("Booking sucessfully");
    this.router.navigate(['home']);

  }

}
