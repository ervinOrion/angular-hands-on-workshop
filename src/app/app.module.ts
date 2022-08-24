import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { RouteChild1Component } from './routes-example/route-child1/route-child1.component';
import { RouteChild2Component } from './routes-example/route-child2/route-child2.component';
import { RouteExampleComponent } from './routes-example/route-example/route-example.component';
import { PipeDirectiveComponent } from './pipe-directive/pipe-directive.component';
import { CustomDateFormatPipe } from './pipe-directive/pipes/custom-date-format.pipe';
import { HighlighterDirective } from './pipe-directive/directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    RouteExampleComponent,
    RouteChild1Component,
    RouteChild2Component,
    PipeDirectiveComponent,
    CustomDateFormatPipe,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
