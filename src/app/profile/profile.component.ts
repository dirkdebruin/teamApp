import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './profile.component.html',
  selector: 'app-profile'
})
export class ProfileComponent{
   constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/users').subscribe((res)=>{this.users = res})
  }

  users:any = [];


}
//hardcoded variabele met wat er allemaal in het profiel moet
// username
// rol (speler/ coach)
// email
