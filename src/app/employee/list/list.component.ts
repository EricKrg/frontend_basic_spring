import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployService } from '../../employ.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private employees : Employee[];
  constructor(
    private employService : EmployService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllEmployees();
  }
  getAllEmployees(): void {
    this.employService.findAll().subscribe(res => {
      console.log(res);
      this.employees = res as Employee[];
    })
  }

}
