import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component'
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [AlunosComponent,
        AlunoFormComponent,
        AlunosDetalheComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }