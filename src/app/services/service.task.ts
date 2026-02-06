import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../../Tarefa';

@Injectable({
  providedIn: 'root',
})
export class Task {

  private apiUri = "http://localhost:3000/tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUri)
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.apiUri}/${tarefa.id}`)
  }

  updateTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(`${this.apiUri}/${tarefa.id}`, tarefa)
  }

  addTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.post<Tarefa>(`${this.apiUri}`, tarefa)
  }
}
