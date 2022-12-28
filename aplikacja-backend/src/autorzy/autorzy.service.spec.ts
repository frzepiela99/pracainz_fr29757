import { Test, TestingModule } from '@nestjs/testing';
import { AutorzyService } from './autorzy.service';

describe('AutorzyService', () => {
  let service: AutorzyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutorzyService],
    }).compile();

    service = module.get<AutorzyService>(AutorzyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
