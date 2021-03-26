import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  
  query: any = '';
  students: any = Students;
  constructor() { }

  ngOnInit(): void {
  }
}
