import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import * as url from "url";


@Component({
  templateUrl: './addmember.component.html',
  selector:'app-addmember'
})

export class AddmemberComponent {
  memberForm !: FormGroup;
  postId:any;
  constructor(private formBuilder: FormBuilder, private httpClient:HttpClient) {
    this.memberForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      email:['', Validators.required],
      role:['']
    })
  }

  addMember(){
    if (this.memberForm.valid) {
      console.log(this.memberForm.value)
      this.httpClient.post<any>('http://localhost:3000/users', this.memberForm.value).subscribe((data: { id: any; }) => {
        this.postId = data.id;
        alert('Member added successfully');
        this.memberForm.reset();
      })

    }else {
      alert('Incorrect input')
    }
  }


}
