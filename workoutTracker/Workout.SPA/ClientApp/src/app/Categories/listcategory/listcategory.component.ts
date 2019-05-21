import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Category } from '../../Category';
import { workoutservice } from '../../workout.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listCategory.component.css']
})
export class listCategoryComponent implements OnInit {

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
