import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { workoutservice } from '../workout.service';
import { Category } from '../category';


@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
/** delete-category component*/
export class DeleteCategoryComponent implements OnInit {
  Cate: Category;

  constructor(private currentRoute: ActivatedRoute, private service: workoutservice) { }

  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (data) => this.Cate = data,
      (error) => alert('Not found')
    );
  }
  delete() {
    this.service.delete(this.Cate.category_id).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));
  }
}
