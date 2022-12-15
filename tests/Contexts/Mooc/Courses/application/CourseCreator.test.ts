import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';
import { CourseId } from '../../../../../src/Contexts/Shared/domain/Courses/CourseId';

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

    const expectedCourse = new Course({ id: new CourseId(id), name, duration });

    await creator.run({ id: id, name, duration });

    repository.assertSaveHaveBeenCalledWith(expectedCourse);
  });
});
