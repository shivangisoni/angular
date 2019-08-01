import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent {

  /* logr(field){
    console.log(field)
  } */

    onSubmit(){
      console.log('Form Submitted');
    }

}
