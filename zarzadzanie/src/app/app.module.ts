import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpLink } from 'apollo-angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { DodajpublikacjeComponent } from './dodajpublikacje/dodajpublikacje.component';

@NgModule({
  declarations: [AppComponent, DodajpublikacjeComponent],
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
  bootstrap: [AppComponent],
})
export class AppModule {}