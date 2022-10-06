import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';
import { EmployeeService } from './service/employee.service';
import { Department } from './Models/department.model';
import { DepartmentService } from './service/department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Labb2Angular';

  departments: Department[] = [];
  department: Department = {
    DepartmentId: '',
    DepartmentName: '',
  };

  employees: Employee[] = [];
  employee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    departmentId: '',
    adress: '',
    salary: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  ngOninit(): void {
    this.getAllDepartments();
  }

  // Get All Employees
  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((response) => {
      this.employees = response;
    });
  }

  // Get All Departments

  getAllDepartments() {
    this.departmentService.getAllDepartments().subscribe((response) => {
      this.departments = response;
    });
  }

  // Add Employee
  onSubmit() {
    if (this.employee.id == '') {
      this.employeeService.addEmployee(this.employee).subscribe((response) => {
        this.getAllEmployees();
        this.employee = {
          id:'',
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          gender: '',

          departmentId: '',
          adress: '',
          salary: '',
        };
      });
    } else {
      this.updateEmplyee(this.employee);
    }
  }

  //update Employee
  updateEmplyee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe((response) => {
      this.getAllEmployees();
    });
  }

  //update Dapartment
  updateDepartment(department: Department) {
    this.departmentService.updateDepartment(department).subscribe((response) => {
        this.getAllDepartments();
      });
  }

  //Delete
  onDeleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      this.getAllEmployees();
    });
  }


    //Delete
    onDeleteDepartment(id: string) {
      this.departmentService.deleteDepartment(id).subscribe((response) => {
        this.getAllDepartments();
      });
    }
  

  populateForm(employee: Employee) {
    this.employee = employee;
  }
}
