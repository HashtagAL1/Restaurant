import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  locations = [
    {
      name: 'Office Levski "G"',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.53974605585!2d23.37862451546755!3d42.71346537916476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8f6a5493b109%3A0x6de5677180d9d4b1!2z0YPQuy4g4oCe0J_QvtGA0YPRh9C40Log0JPQtdC-0YDQs9C4INCa0Y7QvNGO0YDQtNC20LjQtdCy4oCcIDIyLCAxODM2INC2LtC6LiDQm9C10LLRgdC60Lgg0JMsINCh0L7RhNC40Y8sINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sbg!2sde!4v1550771046455',
      phone: '123456789',
      email: 'offLevskiG@mail.com'
    },
    {
      name: 'Office Vitosha',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.329293047346!2d23.317708114843107!3d42.65437682445749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84681cf02863%3A0x6f3c705ff7b93ab9!2z0YPQuy4g4oCe0JHQvtGA0LjRgSDQoNGD0LzQtdC90L7QsuKAnCAzNCwgMTQwNyDQutCyLiDQmtGA0YrRgdGC0L7QstCwINCy0LDQtNCwLCDQodC-0YTQuNGPLCDQkdGK0LvQs9Cw0YDQuNGP!5e0!3m2!1sbg!2sde!4v1550772817631',
      phone: '234567898',
      email: 'offVitosha@mail.com'
    },
    {
      name: 'Office Dianabad',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.760349719161!2d23.347331314843697!3d42.666433623691844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8434b1b843b9%3A0xcadc6de24e3841e4!2z0YPQuy4g4oCeMTMyLdGA0LDigJwgMTQsIDExMTMg0J3Qn9CXINCU0LjQsNC90LDQsdCw0LQsINCh0L7RhNC40Y8sINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sbg!2sde!4v1550772921711',
      phone: '345678912',
      email: 'offDianabad@mail.com'
    }
  ];
  selected = this.locations[0];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onChange(event) {
    for (let l of this.locations) {
      if (event.target.value === l['name']) {
          this.selected = l;
          return;
      }
    }
  }

  getMapUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.selected.map);
  }

}
