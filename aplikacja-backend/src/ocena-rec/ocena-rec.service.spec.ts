import { Test, TestingModule } from '@nestjs/testing';
import { OcenaRecService } from './ocena-rec.service';

describe('OcenaRecService', () => {
  let service: OcenaRecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcenaRecService],
    }).compile();

    service = module.get<OcenaRecService>(OcenaRecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
