// Only Domain Imports
import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { Course } from '../domain/Course';
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
      name: request.name,
      duration: request.duration
    });

    return this._repository.save(course);
  }
}
