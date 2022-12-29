import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Component({
  templateUrl: './team.component.html',
  selector:'app-team'
})

export class TeamComponent{
  constructor(private httpClient:HttpClient) {
  }
  ngOnInit() {
    this.httpClient.get('http://localhost:3000/users').subscribe((res)=>{this.users = res})
  }

  users:any = [];
}
