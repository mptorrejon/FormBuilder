import {Component, Input} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup} from '@angular/forms';

@Component({
	selector: 'languages',
	template: `
		<div [formGroup]="languageForm">
			<label>Language!</label>
			<input formControlName="language" />
			<small [hidden]="!languageForm.controls.language.valid && !languageForm.controls.language.touched">
				Language Required
			</small>
		</div>
	`,
	directives: [REACTIVE_FORM_DIRECTIVES]
})export class LanguagesComponent{
	@Input('group') public languageForm:FormGroup;
}