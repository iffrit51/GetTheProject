import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'
import {  MatDividerModule} from '@angular/material/divider'
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StepsregisterComponent } from './components/stepsregister/stepsregister.component';
import { MatInputModule } from '@angular/material/input';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CabinetitComponent } from './components/cabinetit/cabinetit.component';
import { EspacefreelanceComponent } from './components/espacefreelance/espacefreelance.component';
import { MissionsComponent } from './components/missions/missions.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMissionComponent } from './components/add-mission/add-mission.component';
import { EditMissionComponent } from './components/edit-mission/edit-mission.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfilsComponent } from './components/profils/profils.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ClientfinalComponent } from './components/clientfinal/clientfinal.component';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';
import { DeposerProfilComponent } from './components/deposer-profil/deposer-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    MenuComponent,
    StepsregisterComponent,
    AccueilComponent,
    CabinetitComponent,
    EspacefreelanceComponent,
    MissionsComponent,
    AddMissionComponent,
    EditMissionComponent,
    ProfilsComponent,
    ClientfinalComponent,
    EditProfilComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
