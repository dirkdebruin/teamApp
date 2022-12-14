import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: './calendar.component.html',
  selector: 'app-calendar'
})
export class CalendarComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/matches').subscribe((res)=>{this.matches = res})
  }

  matches:any = [];

  // wedstrijden = [
  //   {
  //     opponent: 'Hercules',
  //     date: '15/12/2022'
  //   },
  //   {
  //     opponent: 'DHSC',
  //     date: '15/02/2023'
  //   },
  //   {
  //     opponent: 'JSV',
  //     date: '15/01/2023'
  //   },
  // ]
}
