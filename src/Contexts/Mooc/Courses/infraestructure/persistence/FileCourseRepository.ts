import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';
import fs from 'fs/promises';
import { deserialize, serialize } from 'bson';

export class FileCourseRepository implements CourseRepository {
  private FILE_PATH = `${__dirname}/courses`;

  async save(course: Course): Promise<void> {
    fs.writeFile(this.filePath(course.id), serialize(course));
  }

  async search(courseId: string): Promise<Course> {
    const courseData = await fs.readFile(this.filePath(courseId));
    const { id, name, duration } = deserialize(courseData);
    return new Course({ id, name, duration });
  }

  private filePath(id: string): string {
    return `${this.FILE_PATH}.${id}.repo`;
  }
}
