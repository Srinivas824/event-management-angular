import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-display',
  templateUrl: './event-display.component.html',
  styleUrls: ['./event-display.component.css']
})
export class EventDisplayComponent implements OnInit {
  equipments:any;
  
  constructor(private service :EventService,private router:Router){
    this.equipments='';
  }
  getAllEquipments(){
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=data;
    })
  }
  getAllFood(){
  this.service.getAllEquipments().subscribe((data:any)=>{
    this.equipments=[];
    for(let f of data){
      if(f.equipmentType=="Food"){
        this.equipments.push(f);
      }
    }
  })
}
  ngOnInit(): void {
    
  }

}
