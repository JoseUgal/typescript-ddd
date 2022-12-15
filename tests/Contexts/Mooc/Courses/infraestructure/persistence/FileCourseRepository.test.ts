import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infraestructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const expectedCourse = new Course({
      id: 'id',
      name: 'name',
      duration: 'duration'
    });
    const repository = new FileCourseRepository();

    await repository.save(expectedCourse);
    const course = await repository.search('id');

    expect(course).toEqual(expectedCourse);
  });
});
