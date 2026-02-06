import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule,],
  templateUrl: './component.add-task.html',
  styleUrl: './component.add-task.css',
})
export class AddTaskComponent {

  @Output() onAddTask = new EventEmitter<Tarefa>()

  tarefa: string = ''
  categoria: string = ''
  concluido: boolean = false

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

  }

}
