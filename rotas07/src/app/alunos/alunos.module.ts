import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosRoutingModule } from "./alunos.routing.module";

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  exports: [],
  declarations: [AlunosComponent, AlunoFormComponent],
  providers: [],
})
export class AlunosModule {}