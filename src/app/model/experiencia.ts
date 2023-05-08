export class Experiencia {
    id? : number;
    nombreExp : string;
    descripcionExp : string;
    fInicio: string;
    fFinal: string;

    constructor(nombreExp: string, descripcionExp: string, fInicio: string, fFinal: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.fInicio = fInicio;
        this.fFinal = fFinal;
    }
}
