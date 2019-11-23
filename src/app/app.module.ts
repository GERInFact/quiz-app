import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { QuestionFormComponent } from './question-form/question-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [AppComponent, QuestionFormComponent, ResultsComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
