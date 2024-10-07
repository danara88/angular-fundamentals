import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({ name: 'activeUsers' })
export class ActiveUsersPipe implements PipeTransform {
  transform(users: User[], status: boolean = true) {
    return users.filter((user) => user.isActive === status);
  }
}
