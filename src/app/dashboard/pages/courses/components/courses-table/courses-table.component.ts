import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];


  @Output()
  deleteCourse = new EventEmitter<number>();

  @Output()
  editCourse = new EventEmitter<Course>();


  displayedColumns = ['id', 'name', 'length', 'teacherName', 'actions']
  
}
