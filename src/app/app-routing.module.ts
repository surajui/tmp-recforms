import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompRComponent } from './comp-r/comp-r.component';
import { CompTComponent } from './comp-t/comp-t.component';


const routes: Routes = [
  {path:'',component:CompRComponent},
   {path:'comp-t',component:CompTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
