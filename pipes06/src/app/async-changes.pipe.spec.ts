import { AsyncChangesPipe } from './async-changes.pipe';

describe('AsyncChangesPipe', () => {
  it('create an instance', () => {
    const pipe = new AsyncChangesPipe();
    expect(pipe).toBeTruthy();
  });
});
