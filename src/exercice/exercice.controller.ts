import { Controller, Get, Param, Post, UseGuards, Body, Put, UseInterceptors, UploadedFile, Inject} from '@nestjs/common';
import { ExerciceService } from './exercice.service';

@Controller('exercice')

export class ExerciceController {
    constructor(
        private exerciceService : ExerciceService 
    ){}
}