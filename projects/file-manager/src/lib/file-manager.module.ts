import { NgModule } from '@angular/core';
import { FileManagerComponent } from './file-manager.component';
import { GeneralComponent } from './components/general/general.component';
import { AngularSplitModule } from 'angular-split';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [FileManagerComponent, GeneralComponent],
  imports: [
    BrowserAnimationsModule,
    AngularSplitModule.forRoot(),
    MatButtonModule,
  ],
  exports: [FileManagerComponent]
})
export class FileManagerModule { }
