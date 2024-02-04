import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/schemas/tasks.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  findAll() {
    this.TaskModel.find();
  }

  async create(createTask: CreateTaskDto) {
    const newTask = new this.TaskModel(createTask);
    return newTask.save();
  }

  async findOne(id: string) {
    return this.TaskModel.findById(id);
  }

  async delete(id: string) {
    return this.TaskModel.findByIdAndDelete(id);
  }

  async update(id: string, task: any) {
    return this.TaskModel.findByIdAndUpdate(id, task);
  }
}
