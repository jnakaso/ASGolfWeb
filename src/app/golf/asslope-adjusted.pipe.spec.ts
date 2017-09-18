import { ASSlopeAdjustedPipe } from './asslope-adjusted.pipe';

describe('ASSlopeAdjustedPipe', () => {
  it('create an instance', () => {
    const pipe = new ASSlopeAdjustedPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform data', () => {
    const pipe = new ASSlopeAdjustedPipe();
    expect(pipe.transform(12.0, 113.0)).toEqual(12.0);
  })
});
