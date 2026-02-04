import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './component.header.html',
  styleUrl: './component.header.css',
})
export class Header {
  title: string = "Tarefas";
}
