import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { VisiteTechniqueSharedModule } from 'app/shared/shared.module';
import { VisiteTechniqueCoreModule } from 'app/core/core.module';
import { VisiteTechniqueAppRoutingModule } from './app-routing.module';
import { VisiteTechniqueHomeModule } from './home/home.module';
import { VisiteTechniqueEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    VisiteTechniqueSharedModule,
    VisiteTechniqueCoreModule,
    VisiteTechniqueHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    VisiteTechniqueEntityModule,
    VisiteTechniqueAppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvXw8DYKYZRrg8XTEYffQl4aONpJbF13I',
    }),
  ],

  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class VisiteTechniqueAppModule {}
