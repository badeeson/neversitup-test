import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsService } from './permutations.service';

describe('PermutationsService', () => {
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationsService],
    }).compile();

    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return permutations for single character', () => {
    const permutations = service.generatePermutations('a');
    expect(permutations).toEqual(['a']);
  });

  it('should return permutations for two characters', () => {
    const permutations = service.generatePermutations('ab');
    expect(permutations).toEqual(['ab', 'ba']);
  });

  it('should return permutations for three characters', () => {
    const permutations = service.generatePermutations('abc');
    expect(permutations).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });

  it('should return permutations for repeated characters', () => {
    const permutations = service.generatePermutations('aabb');
    expect(permutations).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
  });
});
