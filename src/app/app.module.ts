import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GigabytesToMegabytesPipe } from './pipes/gigabytes-to-megabytes.pipe';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GigabytesToMegabytesPipe,
    PipeExampleComponent,
    SearchFilterPipe,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
