/*import { Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
  import { PublikacjaService } from './publikacja.service';
  
  @Controller('publikacja')
  export class PublikacjaController {
    constructor(private readonly publikacjaService: PublikacjaService) {}
  
    @Post()
    addPublikacja(
      @Body('tytul') pubTytul: string,
      @Body('streszczenie') pubStreszczenie: string,
    ) {
      const generatedId = this.publikacjaService.insertPublikacja(
        pubTytul,
        pubStreszczenie,
      );
      return { id: generatedId };
    }
  
    @Get()
    async getAllPublikacje() {
      const publikacja = await this.publikacjaService.getPublikacja();
      return publikacja;
    }
  
    @Get(':id')
    getPublikacja(@Param('id') pubId: string) {
      return this.publikacjaService.getPojedynczaPublikacja(pubId);
    }
  
    @Patch(':id')
    async updatePublikacja(
      @Param('id') pubId: string,
      @Body('tytul') pubTytul: string,
      @Body('streszczenie') pubStreszczenie: string,
    ) {
      await this.publikacjaService.updatePublikacja(pubId, pubTytul, pubStreszczenie);
      return null;
    }
  
    @Delete(':id')
    async removePublikacja(@Param('id') pubId: string) {
        await this.publikacjaService.deletePublikacja(pubId);
        return null;
    }
  }
  */
 