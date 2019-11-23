export class Choice {
  constructor(public value: string, public isCorrect?: boolean) {}
}

export class Question {
  constructor(public label: string, public choices: Choice[]) {}
}

export class Quiz {
  constructor(public label: string, public questions: Question[], public description: string, public fileName: string) {}
}

export class Answers {
  constructor(public values: Choice[] = []) {}
}
