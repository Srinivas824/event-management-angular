import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-equipmentdisplay',
  templateUrl: './equipmentdisplay.component.html',
  styleUrls: ['./equipmentdisplay.component.css']
})
export class EquipmentdisplayComponent implements OnInit{
  equipments:any;
  equipment:any;

  constructor(private service : EventService, private router:Router){
    this.equipments={'equipmentName':'','eventLocation':'','cost':'','eventImage':'',equipmentId:''};
    this.getAllEquipments();
  }
  ngOnInit(): void {
    this.service.getAllEquipments().subscribe((data : any)=>{
      this.equipments =data;
      console.log(data)
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
  getAllDestinationWedding(){
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=[];
      for(let d of data){
        if(d.equipmentType=="Destination Wedding"){
          this.equipments.push(d);
        }
      }
    })
  }
  getAllMusicDance(){
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=[];
      for(let m of data){
        if(m.equipmentType=="Music & Dance"){
          this.equipments.push(m);
        }
      }
    })
  }
  getAllPhotography(){
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=[];
      for(let s of data){
          if(s.equipmentType=="PhotoGraphy"){
            this.equipments.push(s);
          }
      }
    })
  }

  getAllEquipments(){
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=data;
    })
  }
  goReview(equipmentId:any){
    this.service.equipmentIdService=equipmentId;
    console.log(this.service.equipmentIdService);
    this.router.navigate(['review']);
  }
  searchByEventType(value:any){
    console.log(value);
    this.service.searchByEventType(value.search).subscribe((data:any)=>{
      console.log(data);
      this.equipments = data;
    });
    
      }
      

}
