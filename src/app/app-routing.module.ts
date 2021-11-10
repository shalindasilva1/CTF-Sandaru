import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApkPageComponent } from './apk-page/apk-page.component';
import { ImagePageComponent } from './image-page/image-page.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TextFileComponent } from './text-file/text-file.component';
import { ZipFilePageComponent } from './zip-file-page/zip-file-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: '1', component: TextFileComponent },
  { path: '2', component: SourceCodeComponent },
  { path: '3', component: ImagePageComponent },
  { path: '4', component: ZipFilePageComponent },
  { path: '5', component: ApkPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
