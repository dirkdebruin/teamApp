import {Component} from "@angular/core";

@Component({
  templateUrl: './profile.component.html',
  selector: 'app-profile'
})
export class ProfileComponent{
  firstName = 'Dirk';
  lastName = 'de Bruin';
  rol = 'Speler';
  email = 'dirksmail@mail.adres';


}
//hardcoded variabele met wat er allemaal in het profiel moet
// username
// rol (speler/ coach)
// email
