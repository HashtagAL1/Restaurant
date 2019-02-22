import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  imageUrls = [
    {image: '../../../assets/images/image1.jpg'},
    {image: '../../../assets/images/image2.jpg'},
    {image: '../../../assets/images/image3.jpg'}
  ];
  config = {
    width: '100%',
    height: '300px',
    autoPlay: true,
    delay: 3000
  };

  constructor() { }

  ngOnInit() {
  }

}
