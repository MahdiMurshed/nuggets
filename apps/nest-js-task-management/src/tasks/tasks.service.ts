import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from 'src/auth/user.entity';
import { Task } from './task.entity';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  getTasks(filter: GetTasksFilterDto, user: User): Promise<Array<Task>> {
    return this.tasksRepository.getTasks(filter, user);
  }

  async getTaskById(id: string, user: User): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id, user } });

    if (!found) {
      throw new NotFoundException('Task not found');
    }
    return found;
  }

  createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto, user);
  }

  async updateTask(id: string, status: TaskStatus, user: User): Promise<Task> {
    const found = await this.getTaskById(id, user);
    found.status = status;
    await this.tasksRepository.save(found);

    return found;
  }

  async deleteTask(id: string, user: User): Promise<void> {
    const res = await this.tasksRepository.delete({ id, user });
    if (res.affected === 0) {
      throw new NotFoundException('Task not found');
    }
  }
}
