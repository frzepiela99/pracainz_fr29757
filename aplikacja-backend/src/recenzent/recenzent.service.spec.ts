import { Test, TestingModule } from '@nestjs/testing';
import { RecenzentService } from './recenzent.service';

describe('RecenzentService', () => {
  let service: RecenzentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecenzentService],
    }).compile();

    service = module.get<RecenzentService>(RecenzentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
