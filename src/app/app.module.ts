import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from  '@angular/common/http';
import { ConverterComponent } from './converter/converter.component';
import { HistoryComponent } from './history/history.component';

// const routes: Routes = [
//   { path: 'converter', component: ConverterComponent },
//   { path: 'history', component: HistoryComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
