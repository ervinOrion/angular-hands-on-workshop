import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

import { HomeComponent } from './home/home.component';
import { PipeDirectiveComponent } from './pipe-directive/pipe-directive.component';
import { RouteChild1Component } from './routes-example/route-child1/route-child1.component';
import { RouteChild2Component } from './routes-example/route-child2/route-child2.component';
import { RouteExampleComponent } from './routes-example/route-example/route-example.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookComponent },
  { path: 'routes', component: RouteExampleComponent,
    children: [
      {path: 'child1', component: RouteChild1Component},
      {path: 'child2', component: RouteChild2Component}
    ] },
  { path: 'pipe-directive', component: PipeDirectiveComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
