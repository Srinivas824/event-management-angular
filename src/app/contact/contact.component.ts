import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:String;
  email:String;
  phone:String;
  text:String;
  constructor(private service:EventService,private router:Router){
    this.name="";
    this.email="";
    this.phone="";
    this.text="";
  }
 
  ngOnInit(): void {

  }
  feedbackformSubmit(feedbackform:any){
      this.service.addFeedback(feedbackform).subscribe();
      alert("submit SucessFully");
  }
}
