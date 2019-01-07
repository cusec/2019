import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { CodeofconductComponent } from './components/codeofconduct/codeofconduct.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { TeamComponent } from './components/team/team.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TalksComponent } from './components/talks/talks.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'codeofconduct', component:CodeofconductComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'speakers-info', component:SpeakersComponent},
  {path:'sponsors', component:SponsorsComponent},
  {path:'schools', component:SchoolsComponent},
  {path:'organizers', component:TeamComponent},
  {path:'workshops', component:WorkshopsComponent},
  {path:'speakers', component:TalksComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CodeofconductComponent,
    ScheduleComponent,
    SpeakersComponent,
    SponsorsComponent,
    SchoolsComponent,
    TeamComponent,
    WorkshopsComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    TalksComponent
  ],
  imports: [
    BrowserModule,
    NgxPageScrollModule,
    RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
