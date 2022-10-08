import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { FooterPlayer } from './footer/footer.component';
import { BottomLeftNav } from './side-menu/bottom-left-nav/bottom-left-nav.component';
import { BottomRightNav } from './side-menu/bottom-right-nav/bottom-right-nav.component';
import { VolumeControlAbsolute } from './footer/components/volume-control-absolute.component';
import { MockDataComponent } from './media-streamer/store/mock-data.component';
import { CompositionView } from './media-streamer/store/components/composition-view.component';
import { NgStyle } from "@angular/common";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, NavMenuComponent, HomeComponent, CounterComponent, FetchDataComponent, MockDataComponent, CompositionView,
    FooterPlayer, BottomLeftNav, BottomRightNav, VolumeControlAbsolute
  ],
  exports: [ CommonModule, NgStyle ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      { path: 'mock-data', component: MockDataComponent }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
