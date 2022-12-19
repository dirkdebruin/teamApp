import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
  templateUrl: './calendar.component.html',
  selector: 'app-calendar'
})
export class CalendarComponent implements OnInit {
  postId:any;
  constructor(private httpClient: HttpClient, public datepipe: DatePipe) {
  }


  ngOnInit() {
    this.httpClient.get('http://localhost:3000/matches').subscribe((res)=>{this.matches = res})
  }

  matches:any = [];



  opponent = '';
  inputNewOpponent(value: string){
    this.opponent = value;
    console.log(this.opponent);
  }

   date = '';
  inputNewDate(value: string){
    this.date = value;
    //this.newDate = this.datepipe.transform(this.date, 'dd/MM/yyyy') ik kan de transformed date niet opslaan?
    console.log(this.date);
    console.log(this.datepipe.transform(this.date, 'dd/MM/yyyy'));
  }
  inputBody:any;
  private body: any;
  newOpponent() {
    this.inputBody = '{ "opponent": "'+ this.opponent + ', "date": "'+ this.datepipe.transform(this.date, 'dd/MM/yyyy') + '" }';
    console.log(this.inputBody)
    this.httpClient.post<any>('http://localhost:3000/matches', { "opponent": this.opponent, "date": this.datepipe.transform(this.date, 'dd/MM/yyyy')}).subscribe((data: { id: any; }) => {
        this.postId = data.id;
    })
  }
  updateMatch(id: string){
    console.log('update kan nog niet')
    //creer een hidden veld en extra knop met 'Save'
    //this.httpClient.put<any>('http://localhost:3000/matches/+id', { "opponent": "nieuwe tegenstander", "date": "test", "id": "voorbeeld"})
  }
  deleteMatch(id: string){
    console.log('http://localhost:3000/matches/'+id)
    this.httpClient.delete('http://localhost:3000/matches/'+id).subscribe();
  }
}


