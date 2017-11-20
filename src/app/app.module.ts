import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BreedersComponent } from './breeders/breeders.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    GalleryComponent,
    BreedersComponent,
    ContactUsComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    appRoutes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
