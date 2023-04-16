import { Persona } from "./persona.interface";
import { Materia } from "./materia.interface";

export interface Alumno extends Persona {
    notas: number[];
    matriculas: Materia[];
}
