import {Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ErrorService} from './errorService.service';
import {Subscription } from 'rxjs/Subscription';

@Component({
	selector:"error-message",
	template:'<div [hidden]="(errorMessage==null)">{{_errorMessage}}</div>'
})export class ErrorMessage{
	subscription:Subscription;
	@Input() control:FormControl;
	_errorMessage:string = null;
	
	constructor(private error:ErrorService){
		this.subscription = error.thisError.subscribe((v)=>{
			if(v!=""){
				this.errorMessage = v;
			}
		});
	}

	get errorMessage(){
		return this._errorMessage;
		// console.log(this.control.touched);
		// console.log("-->"+this.control.value);
		// console.log(this.control.value == " ");
		// if(this.control.value == "" && this.control.touched){
		// 	console.log('Error');
		// 	return "Error"
		// }
		// else{
		// 	console.log('no Error');
		// 	return null;
		// }
		// return "Default Error"
	}
	set errorMessage(v){
		console.log("---->"+v);
		// this._errorMessage = v;
		this._errorMessage = v;
	}
}