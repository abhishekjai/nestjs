import { Controller, Get, Post, Body, Param, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { Task, Task_Status } from './task.model';
import { GetTaskFilterDto } from './dto/get-task-filter.dto'
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService :TasksService){}

    @Get()
    getAllTasks(@Query() filterDto : GetTaskFilterDto): Task[]{
        if(Object.keys(filterDto).length>0){
            return this.tasksService.getTaskWithFilters(filterDto);
        }else{
            return this.tasksService.getAllTask()
        }
        
    }

    @Get('/:id')
    getTaskById(@Param('id') id : string) : Task {
        return this.tasksService.getTaskById(id);
    }

    @Post('/:id')
    deleteTaskById(@Param('id') id: string){
        return this.tasksService.deleteTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createtaskDto : CreateTaskDto): Task { 
        return this.tasksService.createTask(createtaskDto);
    }

    @Patch('/:id/status')
    updateTask(
        @Param('id') id : string,
        @Body('status', TaskStatusValidationPipe) status : Task_Status
    ): Task {
        return this.tasksService.updateTaskStatus(id,status);
    }
}
