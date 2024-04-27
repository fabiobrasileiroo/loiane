import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component'
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component'
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AlunosRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [AlunosComponent,
        AlunoFormComponent,
        AlunosDetalheComponent
    ],
    providers: [AlunosService],
})
export class AlunosModule { }
