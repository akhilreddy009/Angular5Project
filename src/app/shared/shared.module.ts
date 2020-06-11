import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchemaFormComponent } from './components/schema-form/schema-form.component';
import { JsonSchemaFormModule } from 'angular4-json-schema-form-updated';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JsonSchemaFormModule,
    ReactiveFormsModule
  ],
  declarations: [SchemaFormComponent, AutoCompleteComponent],
  exports:[HttpClientModule,ReactiveFormsModule, AutoCompleteComponent]
})
export class SharedModule { }
