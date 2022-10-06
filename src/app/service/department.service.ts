import { HttpClient } from "@angular/common/http";
import { Department } from "../Models/department.model";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn : 'root'
})

export class DepartmentService{
    baseUrl='https://localhost:7158/api/department'

    constructor(private http:HttpClient) { }



// Get Department
getAllDepartments():Observable<Department[]>
{
    return this.http.get<Department[]>(this.baseUrl);
}



// Add new Department

addDepartment(department:Department):Observable<Department>
{
    

    return this.http.post<Department>(this.baseUrl,department)
}



// Delete Department
deleteDepartment(id:string):Observable<Department>
{
    return this.http.delete<Department>(this.baseUrl + '/' + id)
}

//Update Department
updateDepartment(department:Department):Observable<Department>
{
    return this.http.put<Department>(this.baseUrl + '/' + department.DepartmentId,department)
}



}

