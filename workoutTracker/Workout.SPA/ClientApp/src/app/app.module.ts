import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { workoutservice } from './workout.service';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { listCategoryComponent, } from './listcategory/listcategory.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { addworkout } from './addworkout.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AddCategoryComponent,
    listCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
    AddworkoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: listCategoryComponent, pathMatch: 'full' },
      { path: 'listCategory', component: listCategoryComponent },      
      { path: 'add-Category', component: AddCategoryComponent },
      { path: 'delete-Category/:id', component: DeleteCategoryComponent },
      { path: 'edit-Category/:id', component: EditCategoryComponent },
      { path: '', redirectTo: 'listcategory', pathMatch: 'full' },
      { path:  'add-workout', component: AddworkoutComponent }
    ])
  ],
  providers: [workoutservice, addworkout],
  bootstrap: [AppComponent]
})
export class AppModule { }
