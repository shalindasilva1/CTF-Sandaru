import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFileComponent } from './text-file/text-file.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StartPageComponent } from './start-page/start-page.component';

import { FileSaverModule } from 'ngx-filesaver';
import { SourceCodeComponent } from './source-code/source-code.component';
import { ImagePageComponent } from './image-page/image-page.component';

@NgModule({
  declarations: [			
    AppComponent,
    TextFileComponent,
      StartPageComponent,
      SourceCodeComponent,
      ImagePageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    FileSaverModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
