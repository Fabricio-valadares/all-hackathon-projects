import { IsNotEmpty, IsString } from 'class-validator';

export class NewLaunchDto {
  @IsNotEmpty()
  @IsString()
  idPerson: string;

  @IsNotEmpty()
  @IsString()
  kindLanch: string;

  @IsNotEmpty()
  @IsString()
  date: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  moneyLanch: string;
}
