import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationsService {
  generatePermutations(input: string): string[] {
    const result: string[] = [];

    const backtrack = (current: string, remaining: string) => {
      if (!remaining) {
        result.push(current);
        return;
      }

      const seen = new Set<string>();
      for (let i = 0; i < remaining.length; i++) {
        if (seen.has(remaining[i])) {
          continue;
        }
        seen.add(remaining[i]);
        backtrack(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    };

    backtrack('', input);
    return result;
  }
}
