import { Routes } from '@angular/router';
import { GeneralViewComponent } from './general-view/general-view.component';
import { PatientsComponent } from './patients/patients.component';
import { MedicsComponent } from './medics/medics.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PredictionsComponent } from './predictions/predictions.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'general-view', pathMatch: 'full' },
      { path: 'general-view', component: GeneralViewComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'medics', component: MedicsComponent },
      { path: 'predictions', component: PredictionsComponent },
      { path: 'notifications', component: NotificationsComponent },
      {
        path: 'chatbot',
        loadComponent: () =>
          import('./chatbot/chatbot.component').then((m) => m.ChatbotComponent),
      },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
