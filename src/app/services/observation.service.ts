import { Injectable } from '@angular/core';

const OBSERVATIONS: string[] = [
  'The most elegant solution is generally the most obvious one.',
  'If one leads by example, they can influence by suggestion.',
  'Involvement is the greatest motivator.',
  'Honesty is the best policy in the long run.'
];

@Injectable()
export class ObservationService {
  private static allObservations: string[] = OBSERVATIONS;

  public get observations(): string[] {
    return ObservationService.allObservations;
  }
}
