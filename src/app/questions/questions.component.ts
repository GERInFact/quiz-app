import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionsService } from "../questions.service";
import { Quiz, Answers, Choice, Question } from "../quiz.model";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})
export class QuestionsComponent implements OnInit {
  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;

  showResults = false;

  constructor(
    private route: ActivatedRoute,
    public questionsService: QuestionsService
  ) {}

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = null;
    this.questions = null;
    this.answers = null;
    this.currentQuestionIndex = null;
  }

  ngOnInit() {
    this.questionsService
      .getQuestions(this.route.snapshot.params.quizId)
      .subscribe(questions => {
        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }
}
