import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>()
    static CriouNovoCurso = new EventEmitter<string>()

    private cursos: string[] = ['Angular','Java','Phonegap']

    constructor(private logService: LogService) {
        console.log('CursosService')
    }
    getCursos() {
        this.logService.consoleLog('Obtendo Lista')
        return this.cursos
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}`)
        this.cursos.push(curso)
        this.emitirCursoCriado.emit(curso)
        CursosService.CriouNovoCurso.emit(curso)
    }

}