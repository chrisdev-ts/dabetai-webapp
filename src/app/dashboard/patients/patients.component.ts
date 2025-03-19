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
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Martínez',
      fechaNacimiento: '1985-05-15',
      sexo: 'F',
      curp: 'LOMA850515MDFRRL02',
      correo: 'maria.lopez@example.com',
      telefono: '5512345678',
    },
    {
      nombre: 'Carlos',
      apellidoPaterno: 'Hernández',
      apellidoMaterno: 'Sánchez',
      fechaNacimiento: '1978-03-22',
      sexo: 'M',
      curp: 'HESC780322HDFRRL03',
      correo: 'carlos.hernandez@example.com',
      telefono: '5534567890',
    },
    {
      nombre: 'Ana',
      apellidoPaterno: 'Ramírez',
      apellidoMaterno: 'Torres',
      fechaNacimiento: '1992-07-10',
      sexo: 'F',
      curp: 'RATO920710MDFRRL04',
      correo: 'ana.ramirez@example.com',
      telefono: '5545678901',
    },
    {
      nombre: 'Luis',
      apellidoPaterno: 'Gómez',
      apellidoMaterno: 'Flores',
      fechaNacimiento: '1980-11-30',
      sexo: 'M',
      curp: 'GOFL801130HDFRRL05',
      correo: 'luis.gomez@example.com',
      telefono: '5556789012',
    },
    {
      nombre: 'Sofía',
      apellidoPaterno: 'Díaz',
      apellidoMaterno: 'Morales',
      fechaNacimiento: '1995-09-18',
      sexo: 'F',
      curp: 'DIMO950918MDFRRL06',
      correo: 'sofia.diaz@example.com',
      telefono: '5567890123',
    },
    {
      nombre: 'Miguel',
      apellidoPaterno: 'Cruz',
      apellidoMaterno: 'Ortiz',
      fechaNacimiento: '1988-02-14',
      sexo: 'M',
      curp: 'CUOR880214HDFRRL07',
      correo: 'miguel.cruz@example.com',
      telefono: '5578901234',
    },
    {
      nombre: 'Laura',
      apellidoPaterno: 'Vargas',
      apellidoMaterno: 'Ríos',
      fechaNacimiento: '1993-06-25',
      sexo: 'F',
      curp: 'VARI930625MDFRRL08',
      correo: 'laura.vargas@example.com',
      telefono: '5589012345',
    },
    {
      nombre: 'Jorge',
      apellidoPaterno: 'Mendoza',
      apellidoMaterno: 'Castillo',
      fechaNacimiento: '1982-12-05',
      sexo: 'M',
      curp: 'MECA821205HDFRRL09',
      correo: 'jorge.mendoza@example.com',
      telefono: '5590123456',
    },
    {
      nombre: 'Elena',
      apellidoPaterno: 'Navarro',
      apellidoMaterno: 'Luna',
      fechaNacimiento: '1998-04-12',
      sexo: 'F',
      curp: 'NALU980412MDFRRL10',
      correo: 'elena.navarro@example.com',
      telefono: '5512345670',
    },
    {
      nombre: 'Ricardo',
      apellidoPaterno: 'Salinas',
      apellidoMaterno: 'Pérez',
      fechaNacimiento: '1987-08-08',
      sexo: 'M',
      curp: 'SAPE870808HDFRRL11',
      correo: 'ricardo.salinas@example.com',
      telefono: '5523456789',
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
