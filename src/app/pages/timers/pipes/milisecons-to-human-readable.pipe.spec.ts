import { MiliseconsToHumanReadablePipe } from './milisecons-to-human-readable.pipe';

describe('MiliseconsToHumanReadablePipe', () => {
  it('create an instance', () => {
    const pipe = new MiliseconsToHumanReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
