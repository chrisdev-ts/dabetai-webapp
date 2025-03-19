export interface Patient {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  fechaNacimiento: string;
  sexo: 'M' | 'F';
  curp: string;
  correo: string;
  telefono: string;
}
