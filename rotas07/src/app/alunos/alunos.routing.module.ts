import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunosDetalheComponent } from "./alunos-detalhe/alunos-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";

const alunosRoutes: Routes= [
    { path: 'alunos', component: AlunosComponent, children:[
        { path: 'novo', component: AlunoFormComponent },
        { path: ':id', component: AlunosDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent },
    ]},
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule { }