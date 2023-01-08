import { Test, TestingModule } from '@nestjs/testing';
import { OcenaRecController } from './ocena-rec.controller';

describe('OcenaRecController', () => {
  let controller: OcenaRecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcenaRecController],
    }).compile();

    controller = module.get<OcenaRecController>(OcenaRecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
