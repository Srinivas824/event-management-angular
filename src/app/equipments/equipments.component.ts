import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit{
  
  constructor(private service : EventService,private router:Router){
  }
  ngOnInit(): void {
    
  }
  equipmentFormSubmit(equipmentForm:any){
    this.service.addEquipments(equipmentForm).subscribe();
    alert('registered successfull');
    this.router.navigate(['login'])
    console.log(equipmentForm);
  }
}
