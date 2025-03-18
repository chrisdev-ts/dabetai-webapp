import { Component } from '@angular/core';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { CreateUpdateComponent } from '../../shared/components/modal/create-update/create-update.component';
import { DeleteComponent } from '../../shared/components/modal/delete/delete.component';

@Component({
  selector: 'app-patients',
  imports: [DatatableComponent, CreateUpdateComponent, DeleteComponent],
  templateUrl: './patients.component.html',
})
export class PatientsComponent {
  selectedPatient: any = {};

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

  data = [
    [
      'Juan',
      'Pérez',
      'García',
      '1990-01-01',
      'M',
      'PEGA900101HDFRRL01',
      'juan.perez@example.com',
      '5521234567',
    ],
    [
      'María',
      'López',
      'Martínez',
      '1985-05-15',
      'F',
      'LOMA850515MDFRRL02',
      'maria.lopez@example.com',
      '5534567890',
    ],
    [
      'Carlos',
      'Hernández',
      'Sánchez',
      '1978-09-23',
      'M',
      'HESC780923HDFRRL03',
      'carlos.hernandez@example.com',
      '5545678901',
    ],
    [
      'Ana',
      'Gómez',
      'Rodríguez',
      '1992-12-12',
      'F',
      'GORO921212MDFRRL04',
      'ana.gomez@example.com',
      '5556789012',
    ],
    [
      'Luis',
      'Ramírez',
      'Torres',
      '1980-03-30',
      'M',
      'RATO800330HDFRRL05',
      'luis.ramirez@example.com',
      '5567890123',
    ],
    [
      'Elena',
      'Fernández',
      'Vargas',
      '1988-07-07',
      'F',
      'FEVA880707MDFRRL06',
      'elena.fernandez@example.com',
      '5578901234',
    ],
    [
      'Miguel',
      'Martínez',
      'Luna',
      '1995-11-11',
      'M',
      'MALU951111HDFRRL07',
      'miguel.martinez@example.com',
      '5589012345',
    ],
    [
      'Laura',
      'Santos',
      'Morales',
      '1983-02-02',
      'F',
      'SAMO830202MDFRRL08',
      'laura.santos@example.com',
      '5590123456',
    ],
    [
      'Pedro',
      'Ruiz',
      'González',
      '1975-08-08',
      'M',
      'RUGO750808HDFRRL09',
      'pedro.ruiz@example.com',
      '5512345678',
    ],
    [
      'Sofía',
      'Núñez',
      'Flores',
      '1998-06-06',
      'F',
      'NUFL980606MDFRRL10',
      'sofia.nunez@example.com',
      '5523456789',
    ],
    [
      'Jorge',
      'Castro',
      'Mendoza',
      '1982-04-04',
      'M',
      'CAME820404HDFRRL11',
      'jorge.castro@example.com',
      '5534567890',
    ],
    [
      'Isabel',
      'Ortiz',
      'Pérez',
      '1991-10-10',
      'F',
      'ORPE911010MDFRRL12',
      'isabel.ortiz@example.com',
      '5545678901',
    ],
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
    if (event.action === 'edit') {
      // Convertir la fila seleccionada (arreglo) en un objeto
      this.selectedPatient = this.convertRowToObject(event.data);
    } else if (event.action === 'create') {
      this.selectedPatient = null; // Establecer selectedPatient como null para crear un nuevo registro
    }
  }

  // Método para convertir una fila (arreglo) en un objeto
  convertRowToObject(row: any[]): any {
    return {
      nombre: row[0],
      apellidoPaterno: row[1],
      apellidoMaterno: row[2],
      fechaNacimiento: row[3],
      sexo: row[4],
      curp: row[5],
      correo: row[6],
      telefono: row[7],
    };
  }

  handleUpdate(updatedData: any) {
    // Lógica para actualizar el paciente
    console.log('Actualizar paciente:', updatedData);
  }
  
  handleCreate(newData: any) {
    // Lógica para crear un nuevo paciente
    console.log('Crear paciente:', newData);
  }
  
  handleDelete(deletedData: any) {
    // Lógica para eliminar el paciente
    console.log('Eliminar paciente:', deletedData);
  }
}
