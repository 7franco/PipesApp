import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string, esMayuscula: boolean = true): string {
        return (esMayuscula) ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }
}