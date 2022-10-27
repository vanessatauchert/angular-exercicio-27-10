import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TabComponent } from './tab/tab.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';

const routs: Routes = [
  {
    path: 'tab',
    component: TabComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TabComponent,
    HomeComponent,
    TimerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
