import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsService } from './permutations/permutations.service';
import { PermutationsController } from './permutations/permutations.controller';
import { OddIntService } from './odd-int/odd-int.service';
import { OddIntController } from './odd-int/odd-int.controller';
import { SmileyCountService } from './smiley-count/smiley-count.service';
import { SmileyCountController } from './smiley-count/smiley-count.controller';

@Module({
  imports: [],
  controllers: [AppController, PermutationsController, OddIntController, SmileyCountController],
  providers: [AppService, PermutationsService, OddIntService, SmileyCountService],
})
export class AppModule {}
