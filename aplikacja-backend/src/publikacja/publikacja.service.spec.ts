import { Test, TestingModule } from '@nestjs/testing';
import { PublikacjaService } from './publikacja.service';

describe('PublikacjaService', () => {
  let service: PublikacjaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublikacjaService],
    }).compile();

    service = module.get<PublikacjaService>(PublikacjaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
