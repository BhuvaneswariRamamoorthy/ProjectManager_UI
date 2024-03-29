import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { pipe ,Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';



import {HttpClient} from '@angular/common/http';
import { Task } from '../models/task';
import { Project } from '../models/project';
import { Projectsummary } from '../models/projectsummary';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private _http : Http) 
  {
      
  } 

  //TASKS
  GetTask(id : number) : Observable<Task>
  {
    console.log(id);
      return this._http.get("http://localhost:59317/api/GetTask" +"/"+ id)
      .pipe(map((response : Response)=><Task> response.json()));
  }

  GetAllTasks() : Observable<Task[]>
  {
      return this._http.get("http://localhost:59317/api/GetAllTasks")
      .pipe(map((response : Response)=><Task[]> response.json()));
  }

  InsertData(task : Task) : Observable<string>
  {
    console.log('Insertinggg...');
     return this._http.post("http://localhost:59317/api/AddTask",task)
     .pipe(map((response : Response)=><string> response.json()));
  }

  UpdateData(_task : Task) : Observable<string>
  {
    return this._http.put("http://localhost:59317/api/UpdateTask" ,_task)
    .pipe(map((response : Response)=> <string> response.json()));
  }

  DeleteData(_taskID : number) : Observable<string>
  {
    return this._http.delete("http://localhost:59317/api/DeleteTask" +"/" + _taskID )
    .pipe(map((response : Response)=> <string> response.json()));
  }


  //PROJECTS 
  GetProject(id : number) : Observable<Project>
  {
    console.log('GETPRO'+id);
      return this._http.get("http://localhost:59317/api/GetProject" +"/"+ id)
      .pipe(map((response : Response)=><Project> response.json()));
  }
  
  GetsummaryProjects() : Observable<Projectsummary[]>
  {
      return this._http.get("http://localhost:59317/api/GetProjectsummary")
      .pipe(map((response : Response)=><Projectsummary[]> response.json()));
  }

  GetAllProjects() : Observable<Project[]>
  {
      return this._http.get("http://localhost:59317/api/GetAllProjects")
      .pipe(map((response : Response)=><Project[]> response.json()));
  }

  InsertProject(task : Project) : Observable<string>
  {
    console.log('IN');
     return this._http.post("http://localhost:59317/api/AddProject",task)
     .pipe(map((response : Response)=><string> response.json()));
  }

  UpdateProject(_task : Project) : Observable<string>
  {
    return this._http.put("http://localhost:59317/api/UpdateProject" ,_task)
    .pipe(map((response : Response)=> <string> response.json()));
  }

  DeleteProject(_taskID : number) : Observable<string>
  {
    return this._http.delete("http://localhost:59317/api/DeleteProject" +"/" + _taskID )
    .pipe(map((response : Response)=> <string> response.json()));
  }

//USERS 
GetUser(id : number) : Observable<User>
{
  console.log(id);
    return this._http.get("http://localhost:59317/api/GetUser" +"/"+ id)
    .pipe(map((response : Response)=><User> response.json()));
}

GetsummaryUsers() : Observable<User[]>
  {
      return this._http.get("http://localhost:59317/api/GetUsersummary")
      .pipe(map((response : Response)=><User[]> response.json()));
  }

GetAllUsers() : Observable<User[]>
{
  console.log('User list');
    return this._http.get("http://localhost:59317/api/GetAllUsers")
    .pipe(map((response : Response)=><User[]> response.json()));
}

InsertUser(task : User) : Observable<string>
{
   return this._http.post("http://localhost:59317/api/AddUser",task)
   .pipe(map((response : Response)=><string> response.json()));
}

UpdateUser(_task : User) : Observable<string>
{
  return this._http.put("http://localhost:59317/api/UpdateUser" ,_task)
  .pipe(map((response : Response)=> <string> response.json()));
}

DeleteUser(_taskID : number) : Observable<string>
{
  return this._http.delete("http://localhost:59317/api/DeleteUser" +"/" + _taskID )
  .pipe(map((response : Response)=> <string> response.json()));
}


}
