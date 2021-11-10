import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { TextFileComponent } from './text-file/text-file.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: '1', component: TextFileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
