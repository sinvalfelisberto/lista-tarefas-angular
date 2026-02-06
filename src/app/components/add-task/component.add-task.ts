import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './component.add-task.html',
  styleUrl: './component.add-task.css',
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>()

  tarefa: string = ''
  categoria: string = ''
  concluido: boolean = false
  mostrarFormAddTask: boolean = false

  MostraAddTask() {
    this.mostrarFormAddTask = !this.mostrarFormAddTask
  }

  onSubmit() {
    if (!this.tarefa) {
      alert('adicione uma tarefa')
      return
    }

    const novaTarefa = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }


    this.onAddTask.emit(novaTarefa)

    this.tarefa = ''
    this.categoria = ''
    this.mostrarFormAddTask = false

  }

}
