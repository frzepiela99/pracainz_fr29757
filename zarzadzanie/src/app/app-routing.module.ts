import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DodajpublikacjeComponent } from './publikacja/dodajpublikacje/dodajpublikacje.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { PublikacjaComponent } from './publikacja/publikacja.component';
import { PublikacjaaComponent } from './publikacja/publikacjaa/publikacjaa.component';
import { RecenzowanieComponent } from './publikacja/publikacjaa/recenzent/recenzowanie/recenzowanie.component';
import { EdytujKontoComponent } from './edytuj-konto/edytuj-konto.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'',
    component: StartComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edytuj-konto',
    component: EdytujKontoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'publikacja/:id',
    component: PublikacjaaComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'publikacja',
    component: PublikacjaComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'recenzowanie',
    component: RecenzowanieComponent,
    canActivate: [AuthGuard]
  },
  
  {
    path: 'dodajpublikacje',
    component: DodajpublikacjeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}