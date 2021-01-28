export interface Usuario {
    id: Number
    celular: String
    nombre: String
    apellido: String
    correo: String
    password: String
    confirm:Number
    aleatorio: String
}

export interface Login{
    correo?: String;
    password?: String;
    aleatorio?: String;
}
