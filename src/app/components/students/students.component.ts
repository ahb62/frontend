import { Component, Input } from '@angular/core';
import { Student } from '../../models/students.model';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  displayedColumns: string[] = ['ID', 'Active', 'Grades', 'Name', 'Gender', 'Class', 'Club', 'Persona', 'BreastSize', 'Strength', 'Hairstyle', 'Color', 'Stockings', 'Accessory'];

  @Input() studentsActive: Student = {
    ID: 0,
    active: false,
    grades: 0,
    Name: "",
    Gender: 0,
    Class: 0,
    Club: 0,
    Persona: 0,
    Crush: 0,
    BreastSize: 0,
    Strength: 0,
    Hairstyle: 0,
    Color: "",
    Stockings: "",
    Accessory: 0,
      ScheduleTime: "",
      ScheduleDestination: "",
      ScheduleAction: ""
    
  };
  consoleando() {  
    console.log(this.studentsActive);
  }
}

