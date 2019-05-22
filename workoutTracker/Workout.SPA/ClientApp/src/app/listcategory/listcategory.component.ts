import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { workoutservice } from '../workout.service';
import { Category } from '../category';

@Component({
  selector: 'app-list-category',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class listCategoryComponent implements OnInit {
  cate: string = '';

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
  Edit($event) {
    this.service.update($event).subscribe(
      (data) => alert('updated'),
      (error) => alert("Failed to update")
    );
  }
  Delete($event) {
    this.service.delete($event.category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));

  }



}
