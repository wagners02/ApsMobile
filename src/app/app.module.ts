import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpClientModule} from '@angular/common/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module';
import { IntroPageModule } from '../pages/intro/intro.module';
import { FeedPage } from '../pages/feed/feed';
import { ConfigProvider } from '../providers/config/config';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { FilmesDetalhesPageModule } from '../pages/filmes-detalhes/filmes-detalhes.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    HttpClientModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmesDetalhesPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider
  ]
})
export class AppModule {}
