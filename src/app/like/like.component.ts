import { Component } from '@angular/core';
import { FoodlistService } from '../services/foodlist.service';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styles: [`.active{color:red}`],
  providers:[FoodlistService]
})
export class LikeComponent  {
/*   @Input('userlike') liked;
  @Output() likeToggle = new EventEmitter();
  foodType = "abc"; */
  foods;
    constructor(private foodlistService:FoodlistService){
      this.foods = this.foodlistService.getData();
    }


  /* likeChange($event){
    $event.stopPropagation();
    this.likeToggle.emit();
  } */


}
