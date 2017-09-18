import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ASSlopeAdjusted'
})
export class ASSlopeAdjustedPipe implements PipeTransform {

  transform(hdcp: number, slope: number) {
    var adj = slope == null ? 113 : slope;
    return hdcp * adj / 113;
  }

}
