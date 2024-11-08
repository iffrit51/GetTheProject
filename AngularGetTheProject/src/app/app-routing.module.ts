import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddMissionComponent } from './components/add-mission/add-mission.component';
import { CabinetitComponent } from './components/cabinetit/cabinetit.component';
import { ClientfinalComponent } from './components/clientfinal/clientfinal.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeposerProfilComponent } from './components/deposer-profil/deposer-profil.component';
import { EditMissionComponent } from './components/edit-mission/edit-mission.component';
import { EditProfilComponent } from './components/edit-profil/edit-profil.component';
import { EspacefreelanceComponent } from './components/espacefreelance/espacefreelance.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MissionsComponent } from './components/missions/missions.component';
import { ProfilsComponent } from './components/profils/profils.component';
import { SignupComponent } from './components/signup/signup.component';
import { StepsregisterComponent } from './components/stepsregister/stepsregister.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'Dashboard', component: DashboardComponent},
  {path:'menu', component: MenuComponent},
  {path:'register', component: StepsregisterComponent},
  {path:'accueil', component: AccueilComponent},
  {path:'cabinetit', component: CabinetitComponent},
  {path:'espacefreelance', component: EspacefreelanceComponent},
  {path:'deposer-profil', component: DeposerProfilComponent},
  {path:'missions', component: MissionsComponent},
  {path:'add-mission', component: AddMissionComponent},
  {path:'edit-mission/:id', component: EditMissionComponent},
  {path:'profils', component: ProfilsComponent},
  {path:'clientfinal', component: ClientfinalComponent},
  {path:'edit-profil/:id', component: EditProfilComponent},
  {path:'stepsregister', component: StepsregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
