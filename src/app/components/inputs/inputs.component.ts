import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  // Tipos 
  texto: string;
  list: any[] = [];
  numlength: any
  check: boolean = false

  @ViewChild('clear') elRef: ElementRef

  add(hr: HTMLElement, input: HTMLInputElement) {
    const ref = this.elRef.nativeElement
    this.list.push({
      id: this.list.length,
      name: input.value,
    })
    if (this.list) {
      hr.style.display = 'block'
    }
    input.value = ''
    ref.style.display = (this.list.length === 0) ? 'none' : 'flex'
  }

  removeTask(hr: HTMLElement, id: number) {
    const ref = this.elRef.nativeElement
    this.list = this.list.filter(item => item.id !== id)
    if (this.list.length === 0) {
      hr.style.display = 'none'
    }
    ref.style.display = (this.list.length === 0) ? 'none' : 'flex'
  }

  clearTasks(hr: HTMLElement) {
    const ref = this.elRef.nativeElement
    this.list.splice(0, this.list.length)
    ref.style.display = (this.list.length === 0) ? 'none' : 'flex'
    if (this.list.length === 0) {
      hr.style.display = 'none'
    }
  }

  lineThrough(li: HTMLLIElement, e: Event) {
    const target = event?.target as HTMLInputElement
    if (target.checked) {
      li.style.textDecoration = 'line-through'
    } else {
      li.style.textDecoration = 'none'
    }
  }

  editTask() {

  }


  ngOnInit(): void {

  }

}
