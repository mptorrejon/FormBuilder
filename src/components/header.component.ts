import { Component, Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from './validationService.service';
import { LanguagesComponent } from './languages.component';
import { ErrorMessage } from './ErrorMessage.component';
import { ErrorService } from './errorService.service';

@Component({
	selector: 'my-app',
	templateUrl: '../../assets/templates/header/header.template.html',
	styleUrls: ['../../assets/styles/css/header.css'],
	directives: [REACTIVE_FORM_DIRECTIVES, LanguagesComponent, ErrorMessage]
})export class AppComponent{
	public userForm: FormGroup;
	submitAttempt:boolean = true;

	constructor(private _fb:FormBuilder, private error:ErrorService){
		this.userForm = this._fb.group({
			'firstname': ['', ValidatorService.Firstname ],
			'lastname': ['', ValidatorService.Lastname],
			'languages': this._fb.array([
				this.initLanguage()
			])
		});
		// this.error.thisError.subscribe((v)=>{
		// 	console.log(v);
		// });
	}

	initLanguage(){
		return this._fb.group({
			'language': ['', ValidatorService.Language]
		})
	}

	addLanguage(){
		const control = <FormArray>this.userForm.controls['languages'];
		control.push( this.initLanguage() );
	}

	fireValidation( obj ){
		let errorsArr = [];
		for(let fld in obj){
			errorsArr.push(ValidatorService.Final( fld,  obj[fld] ) );
		}

		this.error.setError("firstname");

		// for(let fld in errorsArr){
		// 	if(fld!=undefined){
		// 		console.log( errorsArr[fld] );

		// 	}
		// }
	}
};