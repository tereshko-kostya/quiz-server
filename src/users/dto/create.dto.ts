import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { MAX_IMAGE_LENGTH, MAX_UID_LENGTH, MAX_USERNAME_LENGTH } from "src/constants";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_UID_LENGTH)
    userId: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_USERNAME_LENGTH)
    username: string

    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_IMAGE_LENGTH)
    image: string
}