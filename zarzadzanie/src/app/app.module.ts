import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { DodajpublikacjeComponent } from './publikacja/dodajpublikacje/dodajpublikacje.component';
import { DodajpublikacjeModule } from './publikacja/dodajpublikacje/dodajpublikacje.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PublikacjaModule } from './publikacja/publikacja.module';
import { PublikacjaaModule } from './publikacja/publikacjaa/publikacjaa.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DropzoneArea } from 'material-ui-dropzone';
import { StartModule } from './start/start.module';
import { RecenzentModule } from './publikacja/publikacjaa/recenzent/recenzent.module';
import { RecenzowanieModule } from './publikacja/publikacjaa/recenzent/recenzowanie/recenzowanie.module';
import { EdytujKontoModule } from './edytuj-konto/edytuj-konto.module';
import { CommonModule } from '@angular/common';
import { OcenaModule } from './publikacja/publikacjaa/recenzent/ocena/ocena.module';
import { FormOcenyModule } from './form-oceny/form-oceny.module';
import { OcenaUserModule } from './form-oceny/ocena-user/ocena-user.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
    ApolloModule,
    HomeModule,
    PublikacjaModule,
    PublikacjaaModule,
    MatToolbarModule,
    StartModule,
    RecenzentModule,
    RecenzowanieModule,
    EdytujKontoModule,
    CommonModule,
    FooterModule,
    OcenaModule,
    FormOcenyModule,
    OcenaUserModule

  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  exports: [ BrowserModule, CommonModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}