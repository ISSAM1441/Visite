import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VisiteTechniqueSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    VisiteTechniqueSharedModule,
    RouterModule.forChild([HOME_ROUTE]),
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvXw8DYKYZRrg8XTEYffQl4aONpJbF13I',
    }),
  ],
  declarations: [HomeComponent],
  providers: [GoogleMapsAPIWrapper],
})
export class VisiteTechniqueHomeModule {}
