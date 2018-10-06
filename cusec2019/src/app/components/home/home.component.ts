import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {

    let script = document.createElement('script');
    document.body.appendChild(script);
    script.src = "assets/js/smoothscroll.js";

      this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
      });
      this.router.events.subscribe((ev:any) => {
          if (ev instanceof NavigationStart) {
              if (ev.url != this.lastPoppedUrl)
                  this.yScrollStack.push(window.scrollY);
          } else if (ev instanceof NavigationEnd) {
              if (ev.url == this.lastPoppedUrl) {
                  this.lastPoppedUrl = undefined;
                  window.scrollTo(0, this.yScrollStack.pop());
              } else
                  window.scrollTo(0, 0);
          }
      });
  }

  scrollTo(className: string):void {
     const elementList = document.querySelectorAll('.' + className);
     const element = elementList[0] as HTMLElement;
     element.scrollIntoView({ behavior: 'smooth' });
  }

}
