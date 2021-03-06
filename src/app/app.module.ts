import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ResultsComponent } from "./results/results.component";
import { QuestionsComponent } from "./questions/questions.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule } from '@angular/material';
import {MatGridListModule } from "@angular/material/grid-list";
import { CorrectAnswersPipe } from './correct-answers.pipe';

const appRoutes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: ":quizId", component: QuestionsComponent },
  { path: "", redirectTo: "welcome", pathMatch: "prefix" }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    QuestionsComponent,
    WelcomeComponent,
    CorrectAnswersPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
