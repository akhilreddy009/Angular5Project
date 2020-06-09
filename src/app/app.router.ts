import { RouterModule, Routes } from '@angular/router';
import { SchemaFormComponent } from './shared/components/schema-form/schema-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'schema-form', pathMatch: 'full' },
  { path: 'home', loadChildren: './modules/pages/pages.module#PagesModule' },
  { path: 'schema-form', component: SchemaFormComponent }

];
export const appRouting = RouterModule.forRoot(routes);
