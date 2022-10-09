import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/employee.model";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn : 'root'
})

export class EmployeeService{
    baseUrl='https://localhost:7158/api/employee'

    constructor(private http:HttpClient) { }



// Get Employee
getAllEmployees():Observable<Employee[]>
{
    return this.http.get<Employee[]>(this.baseUrl);
}



// Add new Employee

addEmployee(employee:Employee):Observable<Employee>
{
    employee.employeeId = '0';

    return this.http.post<Employee>(this.baseUrl,employee)
}



// Delete Employee
deleteEmployee(id:string):Observable<Employee>
{
    return this.http.delete<Employee>(this.baseUrl + '/' + id)
}

//Update Employee
updateEmployee(employee:Employee):Observable<Employee>
{
    return this.http.put<Employee>(this.baseUrl + '/' + employee.employeeId,employee)
}



}

