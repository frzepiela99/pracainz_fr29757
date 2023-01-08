import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {  OcenaUzytkownikService } from './ocena-user.service';

@Controller('ocena-user')
export class OcenaUzytkownikaController {
    constructor(
        private readonly ocenaUzytkownikService: OcenaUzytkownikService
    ) {}

    @Post()
    async OcenaUzytkownika(
        @Body() ocenaUzytkownikaDto: any,
    ) {
        console.log('OcenaUzytkownikaDto', ocenaUzytkownikaDto)
        this.ocenaUzytkownikService.createOcenaUzytkownika(ocenaUzytkownikaDto);
        
    
    };

    @Get('/:publikacjaId/:userId')
    async getOcenaUz(@Param('publikacjaId') publikacjaId: string, @Param('userId') userId: string) {
      const ocenaUzytkownika = await this.ocenaUzytkownikService.getOcenaUzytkownika(publikacjaId, userId);
      return ocenaUzytkownika;
    }
}
