import {Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ErrorService{
	private error = new BehaviorSubject<string>("");
	thisError = this.error.asObservable();

	setError(err){
		this.error.next(err);
	}
	getError(){
		return this.thisError;
	}
}