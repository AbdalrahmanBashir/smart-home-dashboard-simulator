import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitFormat'
})
export class UnitFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
