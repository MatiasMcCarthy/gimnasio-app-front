export interface IMembresia {
  tipo: string;
  inicio: string;
  fin: string;
  vencimiento: string;
}

export interface IClase {
  nombre: string;
  dia: string;
  horario: string;
}

export interface ICliente {
  nombre: string;
  apellido: string;
  membresia: IMembresia;
  clases: IClase[];
}
