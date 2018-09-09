import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DeporteListComponent} from '../deporte/deporte-list/deporte-list.component';



const routes: Routes = [
    {
        path: 'deportes',
        children: [
            {
                path: 'list',
                component: DeporteListComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
