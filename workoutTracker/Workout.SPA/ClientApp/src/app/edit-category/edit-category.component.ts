import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { workoutservice } from '../workout.service';
import { Category } from '../category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {

  public click: boolean = false;
  frmCate: FormGroup;
  @Output() CategoryEdit = new EventEmitter<Category>();
  @Output() CategoryDelete = new EventEmitter<Category>();
  @Input() NameAdd: Category;



  constructor(private currentRoute: ActivatedRoute, private service: workoutservice, private fb: FormBuilder) { }
  get f() {
    return this.frmCate.controls;
  }


  ngOnInit() {
    this.frmCate = this.fb.group({

      name: new FormControl(this.NameAdd.category_name, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');




  }


  saveForm(frm: NgForm) {
    if (frm.valid) {
      this.f.name.disable();
      this.click = false;
      let cate: Category = new Category(this.NameAdd.category_id, frm.value.name);
      this.service.update(cate).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }

  }
  public Enable(): void {
    this.f.name.enable();
    this.click = true;

  }

  deleteFrm(frm: NgForm) {
    let cate = new Category(this.NameAdd.category_id, frm.value.category_name);
    this.CategoryDelete.emit(cate);
  }




}
