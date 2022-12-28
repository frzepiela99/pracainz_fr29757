import { Test, TestingModule } from '@nestjs/testing';
import { AutorzyController } from './autorzy.controller';

describe('AutorzyController', () => {
  let controller: AutorzyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutorzyController],
    }).compile();

    controller = module.get<AutorzyController>(AutorzyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
