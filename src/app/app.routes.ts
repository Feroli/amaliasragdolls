import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BreedersComponent } from './breeders/breeders.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AvailableComponent } from './available/available.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'breeders', component: BreedersComponent },
  { path: 'available', component: AvailableComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contactUs', component: ContactUsComponent },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

export const appRoutes =
  RouterModule.forRoot(routes);
