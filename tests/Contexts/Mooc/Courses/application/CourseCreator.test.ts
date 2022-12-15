import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';
import { CourseName } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseName';
import { CourseNameLengthExceeded } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseNameLengthExceeded';
import { CourseId } from '../../../../../src/Contexts/Mooc/Shared/domain/Courses/CourseId';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

describe('CourseCreator', () => {
  let repository: CourseRepositoryMock;

  beforeEach(() => {
    repository = new CourseRepositoryMock();
  });

  it('should create a valid course', async () => {
    const creator = new CourseCreator(repository);
    const id = '187a4416-36bd-4d85-a5d8-66d157589125';
    const name = 'some-name';
    const duration = '5 hours';

    const expectedCourse = new Course({
      id: new CourseId(id),
      name: new CourseName(name),
      duration: new CourseDuration(duration)
    });

    await creator.run({ id, name, duration });

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });

  it('should throw error if course name length is exceeded', async () => {
    const creator = new CourseCreator(repository);
    const id = 'addea31d-77af-45ad-9792-18b07b76917e';
    const name = '*'.repeat(31);
    const duration = 'some-duration';

    expect(() => {
      const expectedCourse = new Course({
        id: new CourseId(id),
        name: new CourseName(name),
        duration: new CourseDuration(duration)
      });

      creator.run({ id, name, duration });

      repository.assertSaveHaveBeenCalledWith(expectedCourse);
    }).toThrow(CourseNameLengthExceeded);
  });
});
