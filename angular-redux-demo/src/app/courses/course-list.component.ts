import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import { store, filterCourses, IAppState } from '../store';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses$: Observable<IAppState>

  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    store.dispatch(filterCourses(searchText));
  }

  // updateFromState() {
  //   const allState = store.getState();
  //   this.filteredCourses = allState.filteredCourses;
  // }

  ngOnInit() {
    // this.updateFromState();
    // store.subscribe(() => {
    //   this.updateFromState();
    // });
    componentHandler.upgradeDom();
  }
}
