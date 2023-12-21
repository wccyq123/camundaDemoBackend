export class RequestCreateUserDto {
  profile: UserProfileDto;
  credentials: CredentialsDto;
}

export class UserProfileDto {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
}

export class CredentialsDto {
  password: string;
}
