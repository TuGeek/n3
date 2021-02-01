import mongoose, { Document, Schema } from 'mongoose';

 // TODO: Asociar modelo Licencia real
export interface ILicencia extends Document {
    _id: number;
}

export enum Genero {
  hombre = 'H',
  mujer = 'M',
  noEspecificado = 'NE',
}

export enum TipoDocIdentidad {
    DNI = 'DNI',
    NIE = 'NIE',
    NIF = 'NIF',
    Pasaporte = 'Pasaporte',
    Otros = 'Otros',
}

export interface Direccion extends Document {
    direccion: string;
    pais: string;
    provincia: string;
    municipio: string;
    codigo_postal: string;
}

export interface IPersona extends Document {
    _id: number;
    usuario: string;
    email: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    doc_identificacion: string;
    tipo_doc_identificacion: TipoDocIdentidad;
    nombre: string;
    apellidos: string;
    telefono?: string;
    fecha_nacimiento: Date;
    fecha_alta: Date;
    sexo?: Genero;
    nacionalidad: string;
    direcciones?: Direccion[];
    licencias?: Array<ILicencia['_id']>; // TODO: Asociar modelo Licencia
}

const PersonaSchema: Schema = new Schema({
    _id: { type: Number, required: true, unique: true },
    usuario: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    facebook: { type: String },
    linkedin: { type: String },
    twitter: { type: String },
    doc_identificacion: { type: String, required: true, unique: true },
    tipo_doc_identificacion: { type: String, enum: Object.values(TipoDocIdentidad), required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono: { type: String },
    fecha_nacimiento: { type: Date },
    fecha_alta: { type: Date },
    sexo: { type: String, enum: Object.values(Genero) },
    nacionalidad: { type: String, required: true },
    direcciones: { type: Array, default: []},
    licencias: { type: Schema.Types.ObjectId, required: true },
});

// Export the model and return your IPersona interface
export default mongoose.model<IPersona>('Persona', PersonaSchema);
