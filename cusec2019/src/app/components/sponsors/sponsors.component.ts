import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let script = document.createElement('script');
    document.body.appendChild(script);
    script.src = "assets/js/sponsorscroll.js";
  }

}
