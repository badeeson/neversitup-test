import { Injectable } from '@nestjs/common';

@Injectable()
export class OddIntService {
  findOddInt(arr: number[]): number {
    const countMap: Map<number, number> = new Map();

    arr.forEach(num => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    for (const [key, value] of countMap.entries()) {
      if (value % 2 !== 0) {
        return key;
      }
    }

    throw new Error('No integer found with an odd number of occurrences');
  }
}
