import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  details = [{name:'ps1',director:'manirathnam',actor:'vikram'},
              {name:'ironman',director:'tony',actor:'stark'},
               {name:'avenger',director:'captain',actor:'hulk'}];
  }
