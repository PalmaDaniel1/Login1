export interface Usuario {
    id: Number
    celular: String
    nombre: String
    apellido: String
    correo: String
    password: String
    confirm: Number
}

export interface Login{
    correo?: String;
    password?: String;
}
