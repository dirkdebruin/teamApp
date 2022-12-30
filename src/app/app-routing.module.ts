import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CalendarComponent} from "./calendar/calendar.component";
import {ProfileComponent} from "./profile/profile.component";
import {TeamComponent} from "./team/team.component";
import {HomeComponent} from "./home/home.component";


const routes:Routes = [
  {path:'home', component:HomeComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'profile', component:ProfileComponent},
  {path: 'team', component:TeamComponent},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
