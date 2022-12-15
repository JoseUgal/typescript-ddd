// Only Domain Imports
import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { Course } from '../domain/Course';
import { CourseDuration } from '../domain/CourseDuration';
import { CourseName } from '../domain/CourseName';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequet } from './CourseCreatorRequest';

export class CourseCreator {
  private readonly _repository: CourseRepository;

  constructor(repository: CourseRepository) {
    this._repository = repository;
  }

  async run(request: CourseCreatorRequet) {
    const course = new Course({
      id: new Uuid(request.id),
      name: new CourseName(request.name),
      duration: new CourseDuration(request.duration)
    });

    return this._repository.save(course);
  }
}
