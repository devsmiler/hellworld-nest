import { Controller, Get, Post, Param, Delete, Put, Patch, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    
    constructor(private readonly movieService: MoviesService){}
    
    @Get()
    getAll(): Movie[]{
        return this.movieService.getAll();
    }
    
    @Get("/:id")//get id 파라미터와 @Param id 파라미터는 같아야 합니다.
    getOne(@Param("id") movieId: string): Movie{// id 와 함수 내의 로컬 변수 id는 같아야합니다
        return this.movieService.getOne(movieId);
    }
    
    @Post()//get id 파라미터와 @Param id 파라미터는 같아야 합니다.
    create(@Body() movieData){// id 와 함수 내의 로컬 변수 id는 같아야합니다
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return this.movieService.deleteOne(movieId);
    }
    
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return this.movieService.update(movieId, updateData);
    }
    
}
