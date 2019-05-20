import { Component, OnInit } from '@angular/core';
import { workoutservice } from './workout.service';
import { Category } from '../Category';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-view-all-category',
  templateUrl: './view-all-category.component.html',
  styleUrls: ['./view-all-category.component.css']
})
export class ViewAllCategoryComponent implements OnInit {

  Categories: Category[]
  constructor(private service: workoutservice) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.Categories = data,
      (error) => console.log(error)
    );
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new Category(0, $event)).subscribe(
      (data) => alert('Added'),
      (error) => alert("Failed to add")
    );
  }


}