import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsController } from './permutations.controller';
import { PermutationsService } from './permutations.service';

describe('PermutationsController', () => {
  let controller: PermutationsController;
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermutationsController],
      providers: [PermutationsService],
    }).compile();

    controller = module.get<PermutationsController>(PermutationsController);
    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return permutations for input "a"', () => {
    const input = 'a';
    const expectedPermutations = ['a'];

    jest.spyOn(service, 'generatePermutations').mockReturnValue(expectedPermutations);

    expect(controller.getPermutations(input)).toEqual(expectedPermutations);
    expect(service.generatePermutations).toHaveBeenCalledWith(input);
  });

  it('should return permutations for input "ab"', () => {
    const input = 'ab';
    const expectedPermutations = ['ab', 'ba'];

    jest.spyOn(service, 'generatePermutations').mockReturnValue(expectedPermutations);

    expect(controller.getPermutations(input)).toEqual(expectedPermutations);
    expect(service.generatePermutations).toHaveBeenCalledWith(input);
  });

  it('should return permutations for input "abc"', () => {
    const input = 'abc';
    const expectedPermutations = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];

    jest.spyOn(service, 'generatePermutations').mockReturnValue(expectedPermutations);

    expect(controller.getPermutations(input)).toEqual(expectedPermutations);
    expect(service.generatePermutations).toHaveBeenCalledWith(input);
  });

  it('should return permutations for input "aabb"', () => {
    const input = 'abc';
    const expectedPermutations = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'];

    jest.spyOn(service, 'generatePermutations').mockReturnValue(expectedPermutations);

    expect(controller.getPermutations(input)).toEqual(expectedPermutations);
    expect(service.generatePermutations).toHaveBeenCalledWith(input);
  });
});
