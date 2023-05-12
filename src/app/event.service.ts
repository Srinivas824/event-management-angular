import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
function _window():any{
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private isUserLogged :boolean;
  detailsBooking:any;
  userDetails:any;
  eventInfo:any;
  //equipmentIdService:any;

  public equipmentIdService=new BehaviorSubject<any>({
    customProperty:'null'
  })
  // public farmerVariable= new BehaviorSubject<any>({
  //   customProperty:'null'
  // })
  constructor(private httpClient:HttpClient ) { 
    this.isUserLogged=false;
    
    
  }
  setUserLoggedIn(){
    this.isUserLogged=true;
  }
  getUserLogged(){
    return this.isUserLogged;
  }

  registerUser(registrationform:any){
    return this.httpClient.post('save',registrationform);

  }
  addFeedback(feedbackform:any){
    return this.httpClient.post('addFeedback',feedbackform)
  }
  addEquipments(equipmentForm:any){
    return this.httpClient.post('add',equipmentForm);

  }
  getAllEquipments(){
    return this.httpClient.get('displayAllEquipments');
  }
  getAllCustomers(){
    return this.httpClient.get('displayAllCust');
  }
  deleteCust(customerId:number){
    return this.httpClient.delete('deleteBYId/'+customerId);
  }
  updateCustomer(editObject:any){
    return this.httpClient.put('updateCust',editObject);

  }
  deleteEquipments(equipmentId:number){
    return this.httpClient.delete('deleteEquipmentById/'+equipmentId);
  }
  updateEquipments(editObject:any){
    return this.httpClient.put('updateEquip',editObject);

  }
  get nativeWindow():any{
    return _window();
  }
  addBooking(bookingForm:any){
    return this.httpClient.post('addBooking',bookingForm);
  }
  getAllBookings(){
    return this.httpClient.get('displayAllBooking');
  }
  searchByEventType(eventLocation : any){
    return this.httpClient.get('getEventByLocation/'+eventLocation);

  }
  getBooking(){
    console.log(this.detailsBooking)
    this.detailsBooking=localStorage.getItem("book");
    this.detailsBooking=JSON.parse(this.detailsBooking);
    return this.detailsBooking;
  }
  getUser(){
    console.log(this.userDetails)
    this.userDetails= localStorage.getItem("user");
    this.userDetails=JSON.parse(this.userDetails);
    return this.userDetails;
  }
  set(userDetails:any){


    this.userDetails = userDetails;
  }
  getEvent(){
    console.log(this.eventInfo)
    this.eventInfo= localStorage.getItem("event");
    this.eventInfo=JSON.parse(this.eventInfo);
    return this.eventInfo;
  }
  getImages(equipmentId:any){
    return this.httpClient.get('getImages/'+equipmentId);
  }
}
