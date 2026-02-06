import { Component, OnInit } from '@angular/core';
import { Task } from '../../services/service.task';
import { Tarefa } from '../../../Tarefa';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/component.task-item';
import { AddTaskComponent } from '../add-task/component.add-task';


@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem, AddTaskComponent],
  templateUrl: './component.tasks.html',
  styleUrl: './component.tasks.css',
})
export class Tasks implements OnInit {
  tarefas: Tarefa[] = []

  constructor(private taskService: Task) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((informacoes) => {
      this.tarefas = informacoes
      console.log(informacoes)
    })
  }

  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe()
    this.tarefas.push(tarefa)
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe()
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)
  }

  toggleConcluido(tarefa: Tarefa) {
    tarefa.concluido = !tarefa.concluido
    this.taskService.updateTask(tarefa).subscribe()
  }
}
