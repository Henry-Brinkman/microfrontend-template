import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';
import { EntryWrapperComponent } from './entry-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes)
  ],
  declarations: [EntryWrapperComponent]
})
export class RemoteEntryModule {
}
