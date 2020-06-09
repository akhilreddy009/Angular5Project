import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaFormComponent } from './components/schema-form/schema-form.component';
import { JsonSchemaFormModule } from 'angular4-json-schema-form-updated';

@NgModule({
  imports: [
    CommonModule,
    JsonSchemaFormModule
  ],
  declarations: [SchemaFormComponent]
})
export class SharedModule { }
