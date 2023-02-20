import { Component, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Student } from '../../models/students.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private http: HttpClient) {}

  displayedColumns: string[] = ['ID', 'Active', 'Grades', 'Name', 'Gender', 'Class', 'Club', 'Persona', 'BreastSize', 'Strength', 'Hairstyle', 'Color', 'Stockings', 'Accessory'];

  // @Input() studentsActive: Student = {
  //   ID: 0,
  //   active: false,
  //   grades: 0,
  //   Name: "",
  //   Gender: 0,
  //   Class: 0,
  //   Club: 0,
  //   Persona: 0,
  //   Crush: 0,
  //   BreastSize: 0,
  //   Strength: 0,
  //   Hairstyle: 0,
  //   Color: "",
  //   Stockings: "",
  //   Accessory: 0,
  //     ScheduleTime: "",
  //     ScheduleDestination: "",
  //     ScheduleAction: ""
    
  // };

  students: Student[] = [];
  students_active: any;
  dataSource: any;
  ngOnInit(): void {
    this.http.get<Student[]>("http://localhost:3000/characters").subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
      const students_Active: Student[] = this.students.filter((student) => student.active);
      this.students_active = students_Active;
      this.dataSource = this.students_active;
    });
  }
}
