import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() question: any;
  @Input() step: number;
  @Output() newAnswerEvent = new EventEmitter<any>();
  @Output() goBackEvent = new EventEmitter<any>();

  public questionForm: FormGroup;
  public answer: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    if (this.question.type == 3) {
      this.createFormInputs()
    } else {
      this.createSimpleForm()
    }
  }

  createSimpleForm() {
    this.questionForm = new FormGroup({
      answer: new FormControl('', [Validators.required]),
    });
  }

  createFormInputs() {
    this.questionForm = new FormGroup({
      answer: this.createChoices(this.question.options)
    });
  }

  createChoices(choicesInputs) {
    const arr = choicesInputs.map(choice => {
      return choice = new FormControl(choice);
    });
    return new FormArray(arr);
  }

  checkclick(event) {
    if (event.target.checked) {
      this.answer.push(event.target.formControlname)
    } else { this.answer = this.answer.filter(e => e !== event.target.formControlname) }
  }

  submitAnswer() {
    this.newAnswerEvent.emit(this.questionForm.value);
  }
  submitMultiAnswer() {
    this.newAnswerEvent.emit({ answer: this.answer });
  }

  goBack() {
    console.log("want to step back");
    this.goBackEvent.emit();
  }

}

