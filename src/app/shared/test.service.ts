import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  single(name: string): Promise<number> {
    return (Math.random() > 0.5) ?
      Promise.resolve(1) : Promise.resolve(0)
  }

  all(names: string[]) {
    Promise.all(names.map(name => this.single(name)))
    .then(answer => console.log(answer))
    .catch(err => console.log('i caught therfore ', err));
  }



}
