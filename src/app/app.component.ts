import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Student } from './models/students.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  students: Student[] = [];
  students_active: any;
  
  ngOnInit() {
    this.http.get<Student[]>("http://localhost:3000/characters").subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
      const students_Active: Student[] = this.students.filter((student) => student.active);
      this.students_active = students_Active;
      console.log(students_Active);
    });

}
}
