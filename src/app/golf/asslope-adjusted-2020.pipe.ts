import { Pipe, PipeTransform } from '@angular/core';
import { ASCourseTee } from './ascourse';

@Pipe({
  name: 'ASSlopeAdjusted'
})
export class ASSlopeAdjustedPipe implements PipeTransform {

  transform(hdcp: number, tee: ASCourseTee) {
    const par = tee.pars.reduce((sum, p) => sum + par, 0);
    return hdcp * tee.slope / 113 + tee.rating - par;
  }

}
