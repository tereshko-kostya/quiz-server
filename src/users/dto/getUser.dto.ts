import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { MAX_UID_LENGTH, MAX_USERNAME_LENGTH } from "src/constants";

export class GetUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(MAX_UID_LENGTH)
    userId: string
}