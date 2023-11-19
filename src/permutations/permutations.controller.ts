import { Controller, Get, Param } from '@nestjs/common';
import { PermutationsService } from './permutations.service';

@Controller('permutations')
export class PermutationsController {
  constructor(private readonly permutationsService: PermutationsService) {}

  @Get(':input')
  getPermutations(@Param('input') input: string): string[] {
    return this.permutationsService.generatePermutations(input);
  }
}
