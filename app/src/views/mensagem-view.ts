import { escapar } from "../decorators/escapar.js";
import { View } from "./view.js";

export class MensagemView extends View <String>{

    @escapar
    protected template(model : string) : string{
        return `
        <p class="alert alert-info"> 
            ${model}
        </p>
        `;
    }
}