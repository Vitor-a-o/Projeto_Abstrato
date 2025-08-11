import {IsEmail, IsNotEmpty, IsString, Length} from 'class-validator';

export class CreateUserDTO {
    @IsString({message: 'Name must be a string'})
    @IsNotEmpty({message: 'Name is required'})
    @Length(3, 50)
    name!: string;

    @IsEmail({}, {message: 'Email must be a valid email address'})
    @IsNotEmpty({message: 'Email is required'})
    email!: string;
}