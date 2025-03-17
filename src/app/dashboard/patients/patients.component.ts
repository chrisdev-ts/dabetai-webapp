import { Component } from '@angular/core';
import { DatatableComponent } from '../../shared/components/datatable/datatable.component';
import { UpdateComponent } from '../../shared/components/modal/update/update.component';

@Component({
  selector: 'app-patients',
  imports: [DatatableComponent, UpdateComponent],
  templateUrl: './patients.component.html',
})
export class PatientsComponent {

  selectedPatient: any[] = [];

  headings = ["Nombre", "Apellido Paterno", "Apellido Materno", "Fecha de Nacimiento", "Sexo", "CURP", "Correo", "Teléfono"];
  
  data = [
    ["Juan", "Pérez", "García", "1990-01-01", "M", "PEGA900101HDFRRL01", "juan.perez@example.com", "555-1234"],
    ["María", "López", "Martínez", "1985-05-15", "F", "LOMA850515MDFRRL02", "maria.lopez@example.com", "555-5678"],
    ["Carlos", "Hernández", "Sánchez", "1978-09-23", "M", "HESC780923HDFRRL03", "carlos.hernandez@example.com", "555-8765"],
    ["Ana", "Gómez", "Rodríguez", "1992-12-12", "F", "GORO921212MDFRRL04", "ana.gomez@example.com", "555-4321"],
    ["Luis", "Ramírez", "Torres", "1980-03-30", "M", "RATO800330HDFRRL05", "luis.ramirez@example.com", "555-6789"],
    ["Elena", "Fernández", "Vargas", "1988-07-07", "F", "FEVA880707MDFRRL06", "elena.fernandez@example.com", "555-9876"],
    ["Miguel", "Martínez", "Luna", "1995-11-11", "M", "MALU951111HDFRRL07", "miguel.martinez@example.com", "555-5432"],
    ["Laura", "Santos", "Morales", "1983-02-02", "F", "SAMO830202MDFRRL08", "laura.santos@example.com", "555-2109"],
    ["Pedro", "Ruiz", "González", "1975-08-08", "M", "RUGO750808HDFRRL09", "pedro.ruiz@example.com", "555-6543"],
    ["Sofía", "Núñez", "Flores", "1998-06-06", "F", "NUFL980606MDFRRL10", "sofia.nunez@example.com", "555-3210"],
    ["Jorge", "Castro", "Mendoza", "1982-04-04", "M", "CAME820404HDFRRL11", "jorge.castro@example.com", "555-7890"],
    ["Isabel", "Ortiz", "Pérez", "1991-10-10", "F", "ORPE911010MDFRRL12", "isabel.ortiz@example.com", "555-0987"],
  ];

  fields = [
    { name: 'nombre', type: 'text', label: 'Nombre' },
    { name: 'apellidoPaterno', type: 'text', label: 'Apellido paterno' },
    { name: 'apellidoMaterno', type: 'text', label: 'Apellido materno' },
    { name: 'fechaNacimiento', type: 'date', label: 'Fecha de nacimiento' },
    { name: 'sexo', type: 'select', label: 'Sexo', options: ['M', 'F'] },
    { name: 'curp', type: 'text', label: 'CURP' },
    { name: 'correo', type: 'email', label: 'Correo' },
    { name: 'telefono', type: 'tel', label: 'Teléfono' },
  ];
}