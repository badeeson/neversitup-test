import { Test, TestingModule } from '@nestjs/testing';
import { OddIntController } from './odd-int.controller';
import { OddIntService } from './odd-int.service';

describe('OddIntController', () => {
  let controller: OddIntController;
  let service: OddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OddIntController],
      providers: [OddIntService],
    }).compile();

    controller = module.get<OddIntController>(OddIntController);
    service = module.get<OddIntService>(OddIntService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service with correct array and return the odd integer', () => {
    const sampleArray = '1,2,1,2,3,3,4,4,4';
    const expectedOddInt = 3;

    const serviceSpy = jest.spyOn(service, 'findOddInt').mockReturnValue(expectedOddInt);

    const result = controller.findOddInt(sampleArray);
    expect(result).toBe(expectedOddInt);
    expect(serviceSpy).toHaveBeenCalledWith([1, 2, 1, 2, 3, 3, 4, 4, 4]);
  });

  it('should call service with correct array and return the odd integer', () => {
    const sampleArray = '1,2,2,3,3,3,4,3,3,3,2,2,1';
    const expectedOddInt = 4;

    const serviceSpy = jest.spyOn(service, 'findOddInt').mockReturnValue(expectedOddInt);

    const result = controller.findOddInt(sampleArray);
    expect(result).toBe(expectedOddInt);
    expect(serviceSpy).toHaveBeenCalledWith([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
  });
});
