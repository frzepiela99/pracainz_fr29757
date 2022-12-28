import { Test, TestingModule } from '@nestjs/testing';
import { AutorzyResolver } from './autorzy.resolver';

describe('AutorzyResolver', () => {
  let resolver: AutorzyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutorzyResolver],
    }).compile();

    resolver = module.get<AutorzyResolver>(AutorzyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
