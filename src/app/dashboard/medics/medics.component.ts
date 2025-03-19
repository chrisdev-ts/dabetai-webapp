import { Component } from '@angular/core';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { CreateUpdateComponent } from '../../shared/components/modal/create-update/create-update.component';
import { ReadComponent } from '../../shared/components/modal/read/read.component';
import { DeleteComponent } from '../../shared/components/modal/delete/delete.component';
import { Medic } from '../../core/models/medic.model';

@Component({
  selector: 'app-medics',
  imports: [
    DatatableComponent,
    CreateUpdateComponent,
    ReadComponent,
    DeleteComponent,
  ],
  templateUrl: './medics.component.html',
  styleUrl: './medics.component.scss',
})
export class MedicsComponent {
  selectedMedic: Medic | null = null;

  headings = [
    'Nombre',
    'Apellido paterno',
    'Apellido materno',
    'Correo',
    'Teléfono',
    'Cedula profesional',
    'Especialidad',
    'Institución de salud',
  ];

  data: Medic[] = [
    {
      nombre: 'Juan',
      apellidoPaterno: 'Pérez',
      apellidoMaterno: 'García',
      correo: 'juan.perez@example.com',
      telefono: '2712876543',
      cedulaProfesional: 'SDI876543',
      especialidad: 'Cardiología',
      institucionSalud: 'Hospital General',
    },
    {
      nombre: 'María',
      apellidoPaterno: 'López',
      apellidoMaterno: 'Hernández',
      correo: 'maria.lopez@example.com',
      telefono: '2712876544',
      cedulaProfesional: 'SDI876544',
      especialidad: 'Pediatría',
      institucionSalud: 'Clínica Familiar',
    },
    {
      nombre: 'Carlos',
      apellidoPaterno: 'Martínez',
      apellidoMaterno: 'Sánchez',
      correo: 'carlos.martinez@example.com',
      telefono: '2712876545',
      cedulaProfesional: 'SDI876545',
      especialidad: 'Dermatología',
      institucionSalud: 'Hospital Regional',
    },
    {
      nombre: 'Ana',
      apellidoPaterno: 'Gómez',
      apellidoMaterno: 'Ramírez',
      correo: 'ana.gomez@example.com',
      telefono: '2712876546',
      cedulaProfesional: 'SDI876546',
      especialidad: 'Neurología',
      institucionSalud: 'Centro Médico Nacional',
    },
    {
      nombre: 'Luis',
      apellidoPaterno: 'Hernández',
      apellidoMaterno: 'Flores',
      correo: 'luis.hernandez@example.com',
      telefono: '2712876547',
      cedulaProfesional: 'SDI876547',
      especialidad: 'Ginecología',
      institucionSalud: 'Hospital de la Mujer',
    },
    {
      nombre: 'Sofía',
      apellidoPaterno: 'Torres',
      apellidoMaterno: 'Morales',
      correo: 'sofia.torres@example.com',
      telefono: '2712876548',
      cedulaProfesional: 'SDI876548',
      especialidad: 'Oftalmología',
      institucionSalud: 'Clínica de Especialidades',
    },
    {
      nombre: 'Miguel',
      apellidoPaterno: 'Vargas',
      apellidoMaterno: 'Castillo',
      correo: 'miguel.vargas@example.com',
      telefono: '2712876549',
      cedulaProfesional: 'SDI876549',
      especialidad: 'Psiquiatría',
      institucionSalud: 'Hospital Psiquiátrico',
    },
    {
      nombre: 'Laura',
      apellidoPaterno: 'Jiménez',
      apellidoMaterno: 'Cruz',
      correo: 'laura.jimenez@example.com',
      telefono: '2712876550',
      cedulaProfesional: 'SDI876550',
      especialidad: 'Oncología',
      institucionSalud: 'Instituto Nacional de Cancerología',
    },
    {
      nombre: 'Jorge',
      apellidoPaterno: 'Rojas',
      apellidoMaterno: 'Pérez',
      correo: 'jorge.rojas@example.com',
      telefono: '2712876551',
      cedulaProfesional: 'SDI876551',
      especialidad: 'Traumatología',
      institucionSalud: 'Hospital Ortopédico',
    },
    {
      nombre: 'Elena',
      apellidoPaterno: 'Navarro',
      apellidoMaterno: 'Luna',
      correo: 'elena.navarro@example.com',
      telefono: '2712876552',
      cedulaProfesional: 'SDI876552',
      especialidad: 'Endocrinología',
      institucionSalud: 'Hospital Metropolitano',
    },
    {
      nombre: 'Elena',
      apellidoPaterno: 'Navarro',
      apellidoMaterno: 'Luna',
      correo: 'elena.navarro@example.com',
      telefono: '2712876552',
      cedulaProfesional: 'SDI876552',
      especialidad: 'Endocrinología',
      institucionSalud: 'Hospital Metropolitano',
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
      name: 'correo',
      type: 'email',
      label: 'Correo',
      icon: 'fas fa-envelope',
      required: true,
      maxLength: 50,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      placeholder: 'Ej. correo@example.com',
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
    {
      name: 'cedulaProfesional',
      type: 'text',
      label: 'Cedula profesional',
      icon: 'fas fa-id-card',
      required: true,
      pattern: '^[A-Z]{3}[0-9]{6}$',
      placeholder: 'Ej. SDI876543',
    },
    {
      name: 'especialidad',
      type: 'text',
      label: 'Especialidad',
      icon: 'fas fa-stethoscope',
      required: true,
      minLength: 3,
      maxLength: 50,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
      placeholder: 'Ej. Cardiología',
    },
    {
      name: 'institucionSalud',
      type: 'text',
      label: 'Institución de salud',
      icon: 'fas fa-hospital',
      required: true,
      minLength: 3,
      maxLength: 50,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$',
      placeholder: 'Ej. Hospital General',
    },
  ];

  onActionEvent(event: { action: string; data: any }) {
    if (event.action === 'edit' || event.action === 'preview') {
      this.selectedMedic = event.data;
    } else if (event.action === 'create') {
      this.selectedMedic = null;
    }
  }
  handleUpdate(updatedData: any) {
    console.log('Actualizar medico:', updatedData);
  }

  handleCreate(newData: any) {
    console.log('Crear medico:', newData);
  }

  handleDelete(deletedData: any) {
    console.log('Eliminar medico:', deletedData);
  }
}
