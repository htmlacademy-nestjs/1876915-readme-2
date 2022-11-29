import { plainToInstance, ClassConstructor, ClassTransformOptions } from 'class-transformer';

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V, groups?: string[]) {
  const options: ClassTransformOptions = { excludeExtraneousValues: true };
  if (groups) {
    options.groups = [...groups];
  }

  return plainToInstance(someDto, plainObject, options);
}
