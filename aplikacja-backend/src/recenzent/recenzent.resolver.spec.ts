import { Test, TestingModule } from '@nestjs/testing';
import { RecenzentResolver } from './recenzent.resolver';

describe('RecenzentResolver', () => {
  let resolver: RecenzentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecenzentResolver],
    }).compile();

    resolver = module.get<RecenzentResolver>(RecenzentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
