import { Pipe, PipeTransform } from '@angular/core';
import { ASTournament } from '../golf/astournament';
import { ASTournamentSummary } from '../golf/model/astournament-summary';
import { ASRound } from '../golf/model/asround';
import { ASKp } from '../golf/model/askp';

@Pipe({
  name: 'compact'
})
export class CompactPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return JSON.stringify(value);
  }

}
