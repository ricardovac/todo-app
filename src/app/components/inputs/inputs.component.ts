import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  // tarefa: string = '';
  list: any[] = [];
  add(item: string) {
    this.list.push({
      id: this.list.length,
      name: item
    })
  }

  removeTask(id: number) {
    this.list = this.list.filter(item => item.id !== id)
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
