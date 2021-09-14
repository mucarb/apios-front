export interface Tecnico {
    // "any" para indicar que o id pode ser de qualquer tipo
    // "?" para indicar que o id é opcional ser carregado
    id?: any;
    nome: String;
    cpf: String;
    telefone: String;
}