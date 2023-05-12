import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
declare var jQuery:any;

@Component({
  selector: 'app-show-equipments',
  templateUrl: './show-equipments.component.html',
  styleUrls: ['./show-equipments.component.css']
})
export class ShowEquipmentsComponent implements OnInit {
  equipments:any;
  editObject: any;
constructor(private service:EventService){
  this.equipments="";
  this.editObject={equipmentName:'',OwnerName:'',ownerMail:'',ownerNumber:'',cost:'',equipmentType:'',eventLocation:'',eventImage:''}
}
  ngOnInit(): void {
    this.service.getAllEquipments().subscribe((data:any)=>{
      this.equipments=data;
      console.log(data);
    });
  }
  deleteEqui(equipmentId:number){
    this.service.deleteEquipments(equipmentId).subscribe((data:any)=>{
      console.log(data);
      const i = this.equipments.findIndex((element:any)=>{
        return element.equipmentId===equipmentId;
      })
      this.equipments.splice(i,1);
    })
  }
  showEditPopup(equipments:any){
    this.editObject==equipments;
    jQuery('#equiModel').modal('show');
  }
  updateEqui(){
    this.service.updateEquipments(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
