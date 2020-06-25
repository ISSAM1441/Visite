import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  /* attt1 = 
        index: 1,
        nom: 'الإدارة الجهوية للوكالة الفنية للنقل البري أريانة',
        lat:36.851422,
        lng:10.191006
    
  ;
 attt2 = [
    {
      index: 2,
      nom: 'الإدارة الجهوية للوكالة الفنية للنقل البري السيجومي ',
      latitude:36.781570,
      longitude:10.115915,

  }
];*/

  account: Account | null = null;
  authSubscription?: Subscription;
  latitude = 36.76402;
  longitude = 10.223848;
  lat = 36.851422;
  lng = 10.191006;
  lat1 = 36.851422;
  lng1 = 10.191006;
  lat2 = 36.78157;
  lng2 = 10.115915;
  greenMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/green-dot.png';
  yellowMarker = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/yellow-dot.png';

  constructor(private accountService: AccountService, private loginModalService: LoginModalService) {}

  onChoseLocation(event: { coords: { lat: number; lng: number } }): void {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    console.warn('long = ' + this.longitude + 'lat = ' + this.latitude);
  }

  private getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
