import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let script = document.createElement('script');
    document.body.appendChild(script);
    script.src = "assets/js/smoothscroll.js";
  }

}
