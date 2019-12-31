import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }



  getAllQuizQuestions(): Observable<any> {
    return this.http.get("http://localhost:3000/quizData");
  }

}
