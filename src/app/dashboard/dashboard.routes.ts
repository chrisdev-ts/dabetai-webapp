import { Routes } from "@angular/router";
import { GeneralViewComponent } from "./general-view/general-view.component";
import { PatientsComponent } from "./patients/patients.component";

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        children: [
            { path: '', redirectTo: 'general-view', pathMatch: 'full' },
            { path: 'general-view', component: GeneralViewComponent },

            { path: 'patients', component: PatientsComponent },
        ]
    }
];