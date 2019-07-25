import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shivi';
  projectName = 'Shivi';
  projectUrl = 'https://www.google.com';
  setColor = true;
  setWeight = true;

  movie = {
    name : 'Titanic',
    liked : true
  }

  likeSwitch($event){
    this.movie.liked = false; 
  }
}
