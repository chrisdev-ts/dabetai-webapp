import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './update.component.html'
})
export class UpdateComponent {
  @Input() data: any[] = [];
  @Input() title: string = 'Actualizar';
  @Input() fields: { name: string; type: string; label: string; options?: string[] }[] = [];

  @Output() onUpdate = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  update() {
    this.onUpdate.emit(this.data);
    console.log(this.data);
  }

  delete() {
    this.onDelete.emit(this.data);
  }
}