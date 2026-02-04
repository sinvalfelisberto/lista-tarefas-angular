import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/component.header';
import { Tasks } from './components/tasks/component.tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lista-tarefas');
}
