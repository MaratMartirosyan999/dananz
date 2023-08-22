import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MainComponent} from './components/main/main.component';
import {AboutUsComponent} from './components/about/about-us.component';
import {HomeComponent} from './components/home/home.component';
import {ServicesComponent} from './components/services/services.component';
import {OurTeamsComponent} from './components/our-teams/our-teams.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'our-teams', component: OurTeamsComponent},
  {path: 'contact-us', component: ContactUsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutUsComponent,
    HomeComponent,
    ServicesComponent,
    OurTeamsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
