import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { workoutservice } from '../workout.service';
import { Category } from '../Category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {
  public click: boolean = true;
  frmCate: FormGroup;
  @Input() NameAdd: Category;


  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }
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
      let cate: Category = new Category(frm.value.id, frm.value.name);
      this.service.update(cate).subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }

  }
  public Enable(): void {
    this.f.name.enable();
  }
  public Disabled(): void {
    this.f.name.disable();
  }
}
}
