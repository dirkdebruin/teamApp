import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './calendar.component.html',
  selector: 'app-calendar'
})
export class CalendarComponent implements OnInit {
  matches:any = []; //moet $ erbij en type aangeven is beter
  postId:any;
  newMatchForm!: FormGroup;
  constructor(private httpClient: HttpClient, public datepipe: DatePipe, private formBuilder:FormBuilder) {
    this.newMatchForm = this.formBuilder.group({
      opponent:['', Validators.required],
      date:['', Validators.required]
      })
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/matches').subscribe((res)=>{this.matches = res})
  }

  addMatch(){
    if (this.newMatchForm.valid){
      this.newMatchForm.value.date = this.datepipe.transform(this.newMatchForm.value.date, 'dd/MM/yyyy');
      console.log(this.newMatchForm.value)
      this.httpClient.post<any>('http://localhost:3000/matches', this.newMatchForm.value).subscribe((data: { id: any; }) => {
        this.postId = data.id;
        alert('Match added successfully');
        this.newMatchForm.reset();
      })
    } else{
      alert('Incorrect input');
    }
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


