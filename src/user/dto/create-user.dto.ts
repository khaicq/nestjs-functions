import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsInt,
  IsString,
  ValidateNested,
} from 'class-validator';

class LicenseDto {
  @IsString()
  name: string;

  @IsDate()
  @Type(() => Date)
  dateOfIssue: Date;
}
export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  address: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LicenseDto)
  license;
}
