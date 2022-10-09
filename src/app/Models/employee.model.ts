import { Department } from "./department.model";


export interface Employee{
    employeeId:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    phoneNumber?:string;
    gender?:string;

    departmentId?:string;
    department?:Department;
    adress?:string;
    salary?:string;

}