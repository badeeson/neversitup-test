import { Test, TestingModule } from '@nestjs/testing';
import { SmileyCountController } from './smiley-count.controller';
import { SmileyCountService } from './smiley-count.service';

describe('SmileyCountController', () => {
  let controller: SmileyCountController;
  let service: SmileyCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmileyCountController],
      providers: [SmileyCountService],
    }).compile();

    controller = module.get<SmileyCountController>(SmileyCountController);
    service = module.get<SmileyCountService>(SmileyCountService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should count valid smiley faces and return the count', () => {
    const sampleFaces = ':-D,:),;~),;D';
    const expectedCount = 4;

    const serviceSpy = jest.spyOn(service, 'countSmileys').mockReturnValue(expectedCount);

    const result = controller.countSmileys(sampleFaces);
    expect(result).toBe(expectedCount);
    expect(serviceSpy).toHaveBeenCalledWith([':-D', ':)', ';~)', ';D']);
  });
});
