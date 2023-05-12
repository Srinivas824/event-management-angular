import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  equipments:any;
  constructor(private service:EventService){
    
  }
  ngOnInit(): void {
    
  }
  searchByEventType(value:any){
    console.log(value);
    this.service.searchByEventType(value.search).subscribe((data:any)=>{
      console.log(data);
      this.equipments = data;
    });
    
      }
      
}
