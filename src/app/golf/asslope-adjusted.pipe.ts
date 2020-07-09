import { Pipe, PipeTransform } from '@angular/core';
import { ASCourseTee } from './ascourse';

@Pipe({
  name: 'ASSlopeAdjusted'
})
export class ASSlopeAdjustedPipe implements PipeTransform {

  transform(hdcp: number, tee: ASCourseTee) {
    const slope = tee ? tee.slope : 113;
    const rating = tee ? tee.rating : 72.0;
    var par = tee ? tee.pars.reduce((sum, current) => sum + current, 0 ) : 72;
    par = par == 0 ? 72 : par; // for courses without hole-by-hole
    return hdcp * slope / 113 + rating - par;
  }


  old_transform(hdcp: number, tee: ASCourseTee) {
    const par = tee.pars.reduce((sum, p) => sum + p, 0);
    return hdcp * tee.slope / 113 + tee.rating - par;
  }
}
