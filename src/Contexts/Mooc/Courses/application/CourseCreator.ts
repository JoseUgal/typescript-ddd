// Only Domain Imports
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
      id: request.id,
      name: request.name,
      duration: request.duration
    });

    return this._repository.save(course);
  }
}
