import { Expose } from 'class-transformer';
import { UserEntityFilter } from '@readme/shared-types'

const detailed = UserEntityFilter.Detailed,
  logged = UserEntityFilter.Logged,
  registered = UserEntityFilter.Registered;

export class UserRdo {
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public email: string;

  @Expose({ groups: [registered, detailed] })
  public firstName: string;

  @Expose({ groups: [registered, detailed] })
  public lastName: string;

  @Expose({ groups: [registered, detailed] })
  public avatar: string;

  @Expose({ groups: [registered] })
  public createdAt: string;

  @Expose({ groups: [detailed] })
  public publicationCount: string;

  @Expose({ groups: [detailed] })
  public subscribersCount: string;

  @Expose({ groups: [logged] })
  public token: string;
}
