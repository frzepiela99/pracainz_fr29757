import { Test, TestingModule } from '@nestjs/testing';
import { PublikacjaController } from './publikacja.controller';

describe('PublikacjaController', () => {
  let controller: PublikacjaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublikacjaController],
    }).compile();

    controller = module.get<PublikacjaController>(PublikacjaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
