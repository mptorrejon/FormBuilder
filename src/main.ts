/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/header.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { ErrorService } from './components/errorService.service';

bootstrap( 
	AppComponent, 
	[
		disableDeprecatedForms(),
		provideForms(),
		ErrorService
	]
);