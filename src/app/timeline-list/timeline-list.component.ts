import {Component} from '@angular/core';
import {PageEvent} from '@angular/material';

export interface TimeLineList {
  position: number;
  nom: string;
  categorie: string;
  DateCreation: string;
  DateMaJ: string;
  NbreCarte: number;
}

const ELEMENT_DATA: TimeLineList[] = [
  {position: 1, nom: 'Histoire numérique', categorie: 'Numérique', DateCreation: '02/09/2018', DateMaJ: '23/11/2018', NbreCarte: 20},
  {position: 2, nom: 'Histoire des données', categorie: 'Data', DateCreation: '02/09/2016', DateMaJ: '23/11/2019', NbreCarte: 15}
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})

export class TimelineListComponent {
  displayedColumns: string[] = ['position', 'nom', 'categorie', 'DateCreation', 'DateMaJ', 'NbreCarte', 'Edition'];
  dataSource = ELEMENT_DATA;
}

export class PaginatorConfigurableExample {
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
