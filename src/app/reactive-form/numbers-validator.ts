import { Validator } from '@angular/forms';

export class numberValidator implements Validator {
    validate(control){
        console.log(control.value);
        if(isNaN(control.value)) {
            return null
        } else {
            return {numberError : true}
        }
    }
}