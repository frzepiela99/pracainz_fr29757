import { Test, TestingModule } from '@nestjs/testing';
import { RecenzentController } from './recenzent.controller';

describe('RecenzentController', () => {
  let controller: RecenzentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecenzentController],
    }).compile();

    controller = module.get<RecenzentController>(RecenzentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
