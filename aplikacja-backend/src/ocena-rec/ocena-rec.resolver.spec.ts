import { Test, TestingModule } from '@nestjs/testing';
import { OcenaRecResolver } from './ocena-rec.resolver';

describe('OcenaRecResolver', () => {
  let resolver: OcenaRecResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcenaRecResolver],
    }).compile();

    resolver = module.get<OcenaRecResolver>(OcenaRecResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
