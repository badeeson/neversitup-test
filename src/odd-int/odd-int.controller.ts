import { Controller, Get, Param } from '@nestjs/common';
import { OddIntService } from './odd-int.service';

@Controller('odd-int')
export class OddIntController {
  constructor(private readonly oddIntService: OddIntService) {}

  @Get(':arr')
  findOddInt(@Param('arr') arr: string): number {
    const intArray = arr.split(',').map(Number);
    return this.oddIntService.findOddInt(intArray);
  }
}
