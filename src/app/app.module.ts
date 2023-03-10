import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './Pages/home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostelComponent } from './Pages/hostel/hostel.component';
import { RoomtypeComponent } from './Pages/roomtype/roomtype.component';
import { HotelComponent } from './Pages/hotel/hotel.component';
import { AcenteComponent } from './Pages/acente/acente.component';
import { MatTable } from '@angular/material/table';
import { AsyncPipe, registerLocaleData } from "@angular/common";
import { AddhotelsComponent } from './components/addhotels/addhotels.component';
import { UpdateHotelComponent } from './components/updateHotel/updateHotel.component';
import { UpdateroomtypeComponent } from './components/updateroomtype/updateroomtype.component';
import { AddroomtypesComponent } from './components/addroomtypes/addroomtypes.component';
import { AddagencyComponent } from './components/addagency/addagency.component';
import { AgencyviewComponent } from './components/agencyview/agencyview.component';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UpdateagencyComponent } from './components/updateagency/updateagency.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HostelComponent,
    RoomtypeComponent,
    HotelComponent,
    AcenteComponent,
    AddhotelsComponent,
    UpdateHotelComponent,
    UpdateroomtypeComponent,
    AddroomtypesComponent,
    AddagencyComponent,
    AgencyviewComponent,
UpdateagencyComponent


   ],

  imports: [

    HttpClientModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatRippleModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
NgChartsModule,
NgApexchartsModule


  ],

  providers: [
   {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:3000}},
   AsyncPipe
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
