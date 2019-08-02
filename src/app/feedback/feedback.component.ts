import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent {

  /* logr(field){
    console.log(field)
  } */

    onSubmit(form:NgForm){
      console.log(form);
      alert(form.value.firstName);
    }

}
