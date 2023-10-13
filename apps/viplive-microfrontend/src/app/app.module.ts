import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    HttpClientXsrfModule.disable(),
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule)
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
