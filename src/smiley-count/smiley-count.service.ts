import { Injectable } from '@nestjs/common';

@Injectable()
export class SmileyCountService {
  countSmileys(arr: string[]): number {
    const validSmileyRegex = /^[:;][-~]?[)D]$/;

    let count = 0;
    arr.forEach(face => {
      if (validSmileyRegex.test(face)) {
        count++;
      }
    });

    return count;
  }
}
