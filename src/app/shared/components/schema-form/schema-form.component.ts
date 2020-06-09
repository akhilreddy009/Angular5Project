import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema-form',
  templateUrl: './schema-form.component.html',
  styleUrls: ['./schema-form.component.less']
})
export class SchemaFormComponent implements OnInit {
  JSONschema = {
    "first_name": "Jane", "last_name": "Doe", "age": 25, "is_company": false,
    "address": {
      "street_1": "123 Main St.", "street_2": null,
      "city": "Las Vegas", "state": "NV", "zip_code": "89123"
    },
    "phone_numbers": [
      { "number": "702-123-4567", "type": "cell" },
      { "number": "702-987-6543", "type": "work" }
    ], "notes": ""
  };
  constructor() { }

  ngOnInit() {
  }

}
