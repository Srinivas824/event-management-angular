import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { RegisterComponent } from './register/register.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { EquipmentdisplayComponent } from './equipmentdisplay/equipmentdisplay.component';
import { ShowcustomerComponent } from './showcustomer/showcustomer.component';
import { ShowEquipmentsComponent } from './show-equipments/show-equipments.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EventDisplayComponent } from './event-display/event-display.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { EncrDecrServiceService } from './encr-decr-service.service';
import { ContactComponent } from './contact/contact.component';
import { ImagesComponent } from './images/images.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    WeddingComponent,
    EquipmentsComponent,
    EquipmentdisplayComponent,
    ShowcustomerComponent,
    ShowEquipmentsComponent,
    AdminComponent,
    EventDisplayComponent,
    PaymentComponent,
    BookingComponent,
    ContactComponent,
    ImagesComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [EncrDecrServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
