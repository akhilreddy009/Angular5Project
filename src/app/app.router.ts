import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './modules/pages/pages.module#PagesModule' }

];
export const appRouting = RouterModule.forRoot(routes);
