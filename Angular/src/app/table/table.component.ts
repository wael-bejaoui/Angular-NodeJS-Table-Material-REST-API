import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { DataService } from '../user.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import {User} from '../user';
export interface PeriodicElement {
  postId: number;
  id: number;
  name: string;
  email: string;
  body:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  

]
  @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  constructor(private _UserService: DataService) { }
  public users = [];
  displayedColumns: string[] = ['Id', 'postId', 'name', 'email','body'];
  dataSource = new UserDataSource(this._UserService);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 

  ngOnInit(){
    this._UserService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

export class UserDataSource extends MatTableDataSource<any> {
  
  constructor(private _UserService: DataService){
    super();
  }
  
    
  
}