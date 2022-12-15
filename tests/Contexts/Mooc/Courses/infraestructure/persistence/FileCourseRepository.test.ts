import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infraestructure/persistence/FileCourseRepository';
import { CourseId } from '../../../../../../src/Contexts/Shared/domain/Courses/CourseId';

describe('FileCourseRepository', () => {
  it('should save a course', async () => {
    const repository = new FileCourseRepository();
    const expectedCourse = new Course({
      id: new CourseId('2e3bc7d9-0169-4f8c-b357-aad2634bf6e8'),
      name: 'name',
      duration: 'duration'
    });

    await repository.save(expectedCourse);
    const course = await repository.search('2e3bc7d9-0169-4f8c-b357-aad2634bf6e8');

    expect(course).toEqual(expectedCourse);
  });
});
