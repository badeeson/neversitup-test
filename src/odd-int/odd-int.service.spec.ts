import { Test, TestingModule } from '@nestjs/testing';
import { OddIntService } from './odd-int.service';

describe('OddIntService', () => {
  let service: OddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OddIntService],
    }).compile();

    service = module.get<OddIntService>(OddIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find the odd integer in [7]', () => {
    const result = service.findOddInt([7]);
    expect(result).toBe(7);
  });

  it('should find the odd integer in [0]', () => {
    const result = service.findOddInt([0]);
    expect(result).toBe(0);
  });

  it('should find the odd integer in [1,1,2]', () => {
    const result = service.findOddInt([1, 1, 2]);
    expect(result).toBe(2);
  });

  it('should find the odd integer in [0,1,0,1,0]', () => {
    const result = service.findOddInt([0, 1, 0, 1, 0]);
    expect(result).toBe(0);
  });

  it('should find the odd integer in [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
    const result = service.findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toBe(4);
  });
});
