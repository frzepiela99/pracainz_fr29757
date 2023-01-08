import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OcenaRecService } from './ocena-rec.service';

@Controller('ocena-rec')
export class OcenaRecController {
    constructor(
        private readonly ocenaRecService: OcenaRecService
    ) {}

    @Post()
    async OcenaRecenzenta(
        @Body() ocenaRecDto: any,
    ) {
        console.log('OcenaRecenzenta', ocenaRecDto)
        this.ocenaRecService.createOcenaRecenzenta(ocenaRecDto);
        
    
    };

    @Get('/:publikacjaId/:recenzentId')
    async getOcena(@Param('publikacjaId') publikacjaId: string, @Param('recenzentId') recenzentId: string) {
      const ocenaRec = await this.ocenaRecService.getOcenaRecenzent(publikacjaId, recenzentId);
      return ocenaRec;
    }
}
