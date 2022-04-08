import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url:"https://vignette.wikia.nocookie.net/finalfantasy/images/0/02/Logo_Line_Art.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20130101024053",
      alt:"heroi 2"
  },
  {
    url:"https://vignette.wikia.nocookie.net/finalfantasy/images/8/81/Amano_Anniversary_Warrior_of_Light.jpg/revision/latest/top-crop/width/240/height/240?cb=20120625032458",
    alt:"heroi1"
  }
  ]
}
