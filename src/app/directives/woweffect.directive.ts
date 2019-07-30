import { Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
  selector: '[woweffect]'

})

export class WoweffectDirective {

  constructor(private elementRef: ElementRef,private rendered: Renderer){

  }

}
