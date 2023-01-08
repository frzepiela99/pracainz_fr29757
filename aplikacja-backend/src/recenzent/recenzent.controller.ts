import { Body, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
import { RecenzentService } from './recenzent.service';

@Controller('recenzent')
export class RecenzentController {
    constructor(
        private readonly recenzentService: RecenzentService
    ) { }

    @Post()
    //@UseInterceptors()
    async Recenzent(
        @Body() recenzentDto: any,

    ) {
        console.log('recenzentDto', recenzentDto);
        recenzentDto.recenzenci.forEach(recenzent => {
            this.recenzentService.createRecenzent(recenzent, recenzentDto.publikacjaId);
        })
    };

    @Get('/:publikacjaId')
    async getPublikacja(@Param('publikacjaId') pubId: string) {
      const publikacja = await this.recenzentService.getPublikacjaRecenzent(pubId);
      return publikacja;
    }
}