import { getModelForClass, prop, Ref } from '@typegoose/typegoose';

 // TODO: Asociar modelo Licencia real
class Licencia {
    @prop()
    public _id: number;

    @prop()
    public nombre: string;
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

class Direccion {
    @prop({ required: true })
    public direccion!: string;

    @prop({ required: true })
    public pais!: string;

    @prop({ required: true })
    public provincia!: string;

    @prop({ required: true })
    public municipio!: string;

    @prop({ required: true })
    public codigo_postal!: string;
}

// export interface IPersona extends Document {
//     _id: number;
//     usuario: string;
//     email: string;
//     facebook?: string;
//     linkedin?: string;
//     twitter?: string;
//     doc_identificacion: string;
//     tipo_doc_identificacion: TipoDocIdentidad;
//     nombre: string;
//     apellidos: string;
//     telefono?: string;
//     fecha_nacimiento: Date;
//     fecha_alta: Date;
//     sexo?: Genero;
//     nacionalidad: string;
//     direcciones?: Direccion[];
//     licencias?: Array<ILicencia['_id']>; // TODO: Asociar modelo Licencia
// }

// const PersonaSchema: Schema = new Schema({
//     _id: { type: Number, required: true, unique: true },
//     usuario: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     facebook: { type: String },
//     linkedin: { type: String },
//     twitter: { type: String },
//     doc_identificacion: { type: String, required: true, unique: true },
//     tipo_doc_identificacion: { type: String, enum: Object.values(TipoDocIdentidad), required: true },
//     nombre: { type: String, required: true },
//     apellidos: { type: String, required: true },
//     telefono: { type: String },
//     fecha_nacimiento: { type: Date },
//     fecha_alta: { type: Date },
//     sexo: { type: String, enum: Object.values(Genero) },
//     nacionalidad: { type: String, required: true },
//     direcciones: { type: Array, default: []},
//     licencias: { type: Schema.Types.ObjectId, required: true },
// });

class Persona {
    @prop({ required: true, unique: true })
    public _id!: number;

    @prop({ required: true, unique: true })
    public usuario!: string;

    @prop({ required: true, unique: true })
    public email!: string;

    @prop()
    public facebook?: string;

    @prop()
    public linkedin?: string;

    @prop()
    public twitter?: string;

    @prop({ required: true})
    public doc_identificacion: string;

    @prop({ required: true })
    public tipo_doc_identificacion: TipoDocIdentidad;

    @prop({ required: true})
    public nombre: string;

    @prop({ required: true})
    public apellidos: string;

    @prop()
    public telefono?: string;

    @prop({ required: true})
    public fecha_nacimiento: Date;

    @prop({ required: true})
    public fecha_alta: Date;

    @prop()
    public sexo?: Genero;

    @prop({ required: true})
    public nacionalidad: string;

    @prop({ref: () => Direccion})
    public direcciones?: Ref<Direccion[]>;

    @prop({ref: () => Licencia})
    public licencias?: Ref<Licencia[]>; // TODO: Asociar modelo Licencia
}

// Export the model and return your IPersona interface
export default getModelForClass(Persona);
