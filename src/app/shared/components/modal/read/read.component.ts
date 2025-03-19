import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read',
  imports: [],
  templateUrl: './read.component.html',
})
export class ReadComponent {
  @Input() data: any = null;
  @Input() title: string = 'Detalles';
  @Input() fields: { name: string; label: string }[] = [];

  get entries(): { label: string; value: any }[] {
    if (!this.data) return [];

    return Object.entries(this.data).map(([key, value]) => ({
      label: this.fields.find((f) => f.name === key)?.label || key, // Usa label de fields
      value,
    }));
  }
}
