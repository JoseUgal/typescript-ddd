import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';

export class CourseRepositoryMock implements CourseRepository {
  private saveMock: jest.Mock;

  constructor() {
    this.saveMock = jest.fn();
  }

  // Registramos una llamada al metodo save con los parametros que
  // hemos declarado
  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalledWith(expectedCourse: Course): void {
    expect(this.saveMock).toHaveBeenCalledWith(expectedCourse);
  }
}
