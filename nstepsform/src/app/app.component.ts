import { Component , OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nstepsform';
  questions:any=[];
  answers:any=[];
  finalresult:any=[];
  step:number=0;
  apiurl: string ;
  apihost:string;

  constructor(private httpClient: HttpClient){}

  ngOnInit(){
    this.apihost = window.location.hostname;
    this.apiurl = "http://"+this.apihost+":3000/api/questionaire";
   // this.apiurl  ="assets/config/testconfig.json"
    this.httpClient.get(this.apiurl).subscribe(data =>{
      this.questions = data;    
    })
  }

submitAnswer(formdata:any) {
let key = this.questions[this.step].key ;
this.questions[this.step].answer= formdata.answer;
let answer = {  question: key  , answer: formdata.answer };
this.answers.push(answer);
if(this.step==this.questions.length-1){this.finalresult = this.answers;
}
   this.nextStep();
}

nextStep(){
  this.step= this.step+1;
}

stepBack(){
    this.step= this.step-1;
}

}
