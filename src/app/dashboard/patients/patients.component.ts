import { Component } from '@angular/core';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { CreateUpdateComponent } from '../../shared/components/modal/create-update/create-update.component';
import { DeleteComponent } from '../../shared/components/modal/delete/delete.component';
import { ReadComponent } from '../../shared/components/modal/read/read.component';
import { Patient } from '../../core/models/patient.model';

@Component({
  selector: 'app-patients',
  imports: [
    DatatableComponent,
    CreateUpdateComponent,
    DeleteComponent,
    ReadComponent,
  ],
  templateUrl: './patients.component.html',
})
export class PatientsComponent {
  selectedPatient: Patient | null = null;

  headings = [
    'Nombre',
    'Apellido paterno',
    'Apellido materno',
    'Fecha de nacimiento',
    'Sexo',
    'CURP',
    'Correo',
    'Teléfono',
  ];

  data: Patient[] = [
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      fechaNacimiento: '1990-01-01',
      sexo: 'M',
      curp: 'PEGA900101HDFRRL01',
      correo: 'juan.perez@example.com',
      telefono: '5521234567',
    },
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      fechaNacimiento: '1990-01-01',
      sexo: 'M',
      curp: 'PEGA900101HDFRRL01',
      correo: 'juan.perez@example.com',
      telefono: '5521234567',
    },
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      fechaNacimiento: '1990-01-01',
      sexo: 'M',
      curp: 'PEGA900101HDFRRL01',
      correo: 'juan.perez@example.com',
      telefono: '5521234567',
    },
  ];

  fields = [
    {
      name: 'nombre',
      type: 'text',
      label: 'Nombre',
      icon: 'fas fa-user',
      required: true,
      minLength: 3,
      maxLength: 50,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
      placeholder: 'Ej. Juan',
    },
    {
      name: 'apellidoPaterno',
      type: 'text',
      label: 'Apellido paterno',
      icon: 'fas fa-user',
      required: true,
      minLength: 3,
      maxLength: 50,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
      placeholder: 'Ej. Pérez',
    },
    {
      name: 'apellidoMaterno',
      type: 'text',
      label: 'Apellido materno',
      icon: 'fas fa-user',
      minLength: 3,
      maxLength: 50,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
      placeholder: 'Ej. García',
    },
    {
      name: 'fechaNacimiento',
      type: 'date',
      label: 'Fecha de nacimiento',
      icon: 'fas fa-calendar-alt',
      min: 1925,
      max: new Date().getFullYear(),
      required: true,
      errorMessages: {
        min: 'El año mimino permitido es {{ min }}.',
        max: 'El año máximo permitido es {{ max }}.',
      },
    },
    {
      name: 'sexo',
      type: 'select',
      label: 'Sexo',
      options: ['M', 'F'],
      icon: 'fas fa-venus-mars',
      required: true,
      placeholder: 'Selecciona una opción',
    },
    {
      name: 'curp',
      type: 'text',
      label: 'CURP',
      icon: 'fas fa-id-card',
      required: true,
      pattern: '^[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9][0-9]$',
      placeholder: 'Ej. PEGA900101HDFRRL01',
    },
    {
      name: 'correo',
      type: 'email',
      label: 'Correo',
      icon: 'fas fa-envelope',
      required: true,
      maxLength: 50,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      placeholder: 'Ej. correo@examnple.com',
    },
    {
      name: 'telefono',
      type: 'tel',
      label: 'Teléfono',
      icon: 'fas fa-phone',
      required: true,
      pattern: '^[0-9]{10}$',
      placeholder: 'Ej. 2722897658',
      // errorMessages: {
      //   pattern: 'El teléfono debe tener 10 dígitos.',
      // },
    },
  ];

  onActionEvent(event: { action: string; data: any }) {
    if (event.action === 'edit' || event.action === 'preview') {
      this.selectedPatient = event.data;
    } else if (event.action === 'create') {
      this.selectedPatient = null;
    }
  }

  handleUpdate(updatedData: Patient) {
    console.log('Actualizar paciente:', updatedData);
  }

  handleCreate(newData: Patient) {
    console.log('Crear paciente:', newData);
  }

  handleDelete(deletedData: Patient) {
    console.log('Eliminar paciente:', deletedData);
  }
}
