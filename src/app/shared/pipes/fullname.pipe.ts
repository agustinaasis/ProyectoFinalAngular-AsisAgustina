import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/pages/users/models';

@Pipe({
  name: 'fullname'
})

export class FullnamePipe implements PipeTransform {

  transform ( value: User, ...args: unknown[] ): unknown {
    const firstArg = args [0];
    const result = `${value.lastName} ${', '} ${value.name}`;

    switch (firstArg){
      case 'lowercase':
          return result.toLocaleLowerCase();

      case 'uppercase':
          return result.toLocaleUpperCase();

      default:
        return result;
    }
  }
}
