export class ValidatorService{
	static getValidatorsErrorMessage(validatorName:string, validatorValue?:any){
		let config = {
			"invalidFirstname": "Invalid Firstname",
			"invalidLastName": "Invalid Lastname",
			"invalidLanguage": "Invalid Lastname"
		};
		return config[validatorName];
	}

	static Firstname(control){
		if(control.value.match(/^[-,' ,a-zA-Z]+$/) ){
			return null 
		}else{
			return { "invalidFirstname": true };
		}	
	}

	static Lastname(control){
		if(control.value.match(/^[-,' ,a-zA-Z]+$/) ){
			return null 
		}else{ 
			return { "invalidLastName": true };
		}
	}
	static Language(control){
		if(control.value.match(/^[-,' ,a-zA-Z]+$/) ){
			return null 
		}else{ 
			return { "invalidLanguage": true };
		}
	}
	static Final(which, formObject ){
		let error;
		switch(which){
			case 'firstname':	error = this.Firstname(formObject);	break;
			case 'lastname':	error = this.Lastname(formObject);	break;
			case 'language':	error = this.Language(formObject);	break;
		}

		if(formObject.controls != undefined){
			for(let fld in formObject.controls){
				return this.Final( fld, formObject.controls[fld]);
			}
		}
		if(error!=undefined)	return error;
		
	}
}