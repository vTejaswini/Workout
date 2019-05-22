import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Category } from '../Category';
import { workoutservice } from '../workout.service';
import { workout } from '../workout';
import { addworkout } from '../addworkout.service';

@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
/** AddWorkOut component*/
export class AddworkoutComponent implements OnInit
{
  
  frmWorkout: FormGroup;
  categories: Category[];
  public count: number = 0;
  /** addworkout ctor */
  constructor(private fb: FormBuilder, private service: workoutservice, private ser: addworkout) {
    this.frmWorkout = this.fb.group({
      Title: new FormControl('', Validators.required),
      Note: new FormControl('', Validators.required),
      Calories: new FormControl(0, Validators.required)
    });

  }
  ngOnInit(): void
  {
    this.service.getAll().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
  }
  inc() {
    this.count = this.count + 0.1;
  }

  dec() {
    if (this.count > 0) {
      this.count = this.count - 0.1;
    }
    else {
      this.count = 0;
    }
  }
  saveForm(frm: NgForm) {
    if (frm.valid) {
      let cate: workout = new workout(frm.value.Title, frm.value.Note, frm.value.Calory, frm.value.Category);
      console.log(cate);
      this.ser.save(cate).subscribe(
        (data) => alert('Added'),
        (error) => console.log(error)
      );
    }
  } 

}
