import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { workoutservice } from './workout.service';
import { DeleteCategoryComponent } from './Categories/delete-category/delete-category.component';
import { AddCategoryComponent } from './Categories/add-category/add-category.component';
import { EditCategoryComponent } from './Categories/edit-category/edit-category.component';
import { listCategoryComponent } from './Categories/listcategory/listcategory.component';
import { SearchcategoryComponent } from './Categories/searchcategory/searchcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AddCategoryComponent,
    listCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent,
   SearchcategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'listCategory', component: listCategoryComponent },      
      { path: 'add-Category', component: AddCategoryComponent },
      { path: 'delete-Category/:id', component: DeleteCategoryComponent },
      { path: 'edit-Category/:id', component: EditCategoryComponent },
      { path: 'search-Category', component: SearchcategoryComponent },
      { path: '', redirectTo: 'listcategory', pathMatch: 'full' }
    ])
  ],
  providers: [workoutservice],
  bootstrap: [listCategoryComponent]
})
export class AppModule { }
