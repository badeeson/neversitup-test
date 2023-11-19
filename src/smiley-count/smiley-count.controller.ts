import { Controller, Get, Param } from '@nestjs/common';
import { SmileyCountService } from './smiley-count.service';

@Controller('smiley-count')
export class SmileyCountController {
  constructor(private readonly smileyCountService: SmileyCountService) {}

  @Get(':faces')
  countSmileys(@Param('faces') faces: string): number {
    const facesArray = faces.split(',');
    return this.smileyCountService.countSmileys(facesArray);
  }
}
