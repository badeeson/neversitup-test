import { Test, TestingModule } from '@nestjs/testing';
import { SmileyCountService } from './smiley-count.service';

describe('SmileyCountService', () => {
  let service: SmileyCountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmileyCountService],
    }).compile();

    service = module.get<SmileyCountService>(SmileyCountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should count valid smiley faces in an array', () => {
    const input1 = [':)', ';(', ';}', ':-D'];
    const input2 = [';D', ':-(', ':-)', ';~)'];
    const input3 = [';]', ':[', ';*', ':$', ';-D'];

    expect(service.countSmileys(input1)).toBe(2);
    expect(service.countSmileys(input2)).toBe(3);
    expect(service.countSmileys(input3)).toBe(1);
  });

  it('should return 0 for an empty array', () => {
    const input = [];
    expect(service.countSmileys(input)).toBe(0);
  });
});
