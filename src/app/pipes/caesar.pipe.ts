import { Pipe, PipeTransform } from '@angular/core';
import { rotate } from '@hogashi/rot13';

@Pipe({
  name: 'caesar'
})
export class CaesarPipe implements PipeTransform {

  transform(value: string, offset: number = 13): string {
    return rotate(value, offset);
  }

}
