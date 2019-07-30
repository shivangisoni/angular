import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styles: [`.active{color:red}`]
})
export class LikeComponent  {
  @Input('userlike') liked;
  @Output() likeToggle = new EventEmitter();
  Foods = ['Pasta','Pizza','Maggie','Sandwich','Burger','Pastry'];
  foodType = "abc";

  likeChange($event){
    $event.stopPropagation();
    this.likeToggle.emit();
  }


}
