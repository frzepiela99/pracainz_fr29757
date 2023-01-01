import { BadRequestException,Body,Controller,Delete,Get,Param,Post, Req, Res, UploadedFile,UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { PlikService } from './plik.service';
import { multerOptions } from '../config/multerOptions.config';

@Controller()
export class UploadsController {

  constructor(
    private plikService: PlikService
  ) {}
    @Post('uploads')
    @UseInterceptors(FileInterceptor( "file", multerOptions))
    
    async uploadFile(@UploadedFile() file: Express.Multer.File,  
    @Body('publikacjaId') publikacjaId: string,){
      console.log(file, publikacjaId);
      if(!file) {
        throw new BadRequestException('Plik jest niepoprawny!');
      } else {
        const response = await this.plikService.createPlik(publikacjaId, file.originalname, file.filename)
        return response;
      }
    } 

    @Get('file/:filename')
    async getFile(@Param('filename') filename, @Res() res: Response) {
        res.sendFile(filename, {root: './uploads/temp'});
    }

    @Get('files/:publikacjaId')
    async getFiles(@Param('publikacjaId') publikacjaId) {
    const response = await this.plikService.getPlik(publikacjaId);
    console.log(response);
    return response;
    }

    @Delete('file/:id')
    async deletePlik(@Param('id') id: string) {
      return await this.plikService.deletePlik(id);
    }
}
