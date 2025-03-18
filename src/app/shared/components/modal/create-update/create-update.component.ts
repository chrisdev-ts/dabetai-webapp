import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { DeleteComponent } from "../delete/delete.component";

@Component({
  selector: 'app-create-update',
  imports: [ReactiveFormsModule, NgClass, DeleteComponent],
  templateUrl: './create-update.component.html',
})
export class CreateUpdateComponent implements OnChanges {
  dataForm: FormGroup;

  @Input() data: any = null;
  @Input() title: string = '';
  @Input() fields: {
    name: string;
    type: string;
    label: string;
    options?: string[];
    icon?: string;
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    placeholder?: string;
    errorMessages?: { [key: string]: string };
  }[] = [];

  defaultIcons: { [key: string]: string } = {
    text: 'fas fa-font',
    number: 'fas fa-hashtag',
    date: 'fas fa-calendar-alt',
    email: 'fas fa-envelope',
    tel: 'fas fa-phone',
    select: 'fas fa-list-ul',
  };

  genericErrorMessages: { [key: string]: string } = {
    required: 'Este campo es obligatorio.',
    minlength: 'Debe tener al menos {{ requiredLength }} caracteres.',
    maxlength: 'No debe exceder {{ requiredLength }} caracteres.',
    min: 'El valor mínimo permitido es {{ min }}.',
    max: 'El valor máximo permitido es {{ max }}.',
    email: 'Ingrese un correo electrónico válido.',
    pattern: 'El formato no es válido.',
  };

  @Output() onUpdate = new EventEmitter<any>();
  @Output() onCreate = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  private _fb = inject(FormBuilder);

  constructor() {
    this.dataForm = this._fb.group({});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['fields'] || changes['data']) {
      this.initForm();
    }
  }

  initForm() {
    let group: any = {};

    this.fields.forEach((field) => {
      const validators = [];

      // Validaciones dinámicas
      if (field.required) {
        validators.push(Validators.required);
      }
      if (field.min !== undefined) {
        validators.push(Validators.min(field.min));
      }
      if (field.max !== undefined) {
        validators.push(Validators.max(field.max));
      }
      if (field.minLength !== undefined) {
        validators.push(Validators.minLength(field.minLength));
      }
      if (field.maxLength !== undefined) {
        validators.push(Validators.maxLength(field.maxLength));
      }
      if (field.pattern) {
        validators.push(Validators.pattern(field.pattern));
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }

      // Asignar el valor inicial y las validaciones
      group[field.name] = [this.data?.[field.name] || '', validators];
    });

    this.dataForm = this._fb.group(group);
  }

  getFieldErrors(fieldName: string): string[] {
    const errors = this.dataForm.get(fieldName)?.errors;
    const fieldConfig = this.fields.find((field) => field.name === fieldName);

    if (!errors || !fieldConfig) {
      return [];
    }

    return Object.keys(errors).map((errorKey) => {
      // Usar el mensaje personalizado si existe, de lo contrario, usar el genérico
      const customMessage = fieldConfig.errorMessages?.[errorKey];
      const genericMessage = this.genericErrorMessages[errorKey];

      let message =
        customMessage || genericMessage || `Error de validación: ${errorKey}`;

      // Reemplazar placeholders con valores reales
      if (errors[errorKey]) {
        for (const key in errors[errorKey]) {
          message = message.replace(`{{ ${key} }}`, errors[errorKey][key]);
        }
      }

      return message;
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      if (this.data) {
        // Si hay data, es una actualización
        this.onUpdate.emit(this.dataForm.value);
      } else {
        // Si no hay data, es una creación
        this.onCreate.emit(this.dataForm.value);
      }
    }
  }

  delete() {
    this.onDelete.emit(this.dataForm.value);
  }
}
