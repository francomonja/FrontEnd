export class Educacion {
    id?: number;
    nombreEdu: string;
    descripcionEdu: string;
    fInicio: string;
    fFinal: string;

    constructor(nombreEdu: string, descripcionEdu: string,fInicio: string, fFinal: string){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.fInicio = fInicio;
        this.fFinal = fFinal;
    }
}
