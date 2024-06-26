import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { TasksService } from './tasks.service';
import { User } from 'src/auth/user.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(
    @Query() filter: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Array<Task>> {
    return this.tasksService.getTasks(filter, user);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
    return this.tasksService.getTaskById(id, user);
  }

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto, user);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Query('id') id: string,
    @Body() updateTaskStatusDto: UpdateStatusDto,
    @GetUser() user: User,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;

    return this.tasksService.updateTask(id, status, user);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.tasksService.deleteTask(id, user);
  }
}
