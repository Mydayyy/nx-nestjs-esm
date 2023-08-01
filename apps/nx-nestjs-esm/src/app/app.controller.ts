import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { fileTypeFromFile } from 'file-type';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData() {

    //const { fileTypeFromFile } = await (eval('import("file-type")') as Promise<typeof import("file-type")>);

    const res = await fileTypeFromFile("./white.png")
    console.log(res)
    return res;
  }


}