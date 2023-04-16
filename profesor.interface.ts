import { Persona } from "./persona.interface";
import { Materia } from "./materia.interface";
import { Contrato } from "./contrato.interface";

export interface Profesor extends Persona {
    contratos: Contrato[];
    materias: Materia[];
}
