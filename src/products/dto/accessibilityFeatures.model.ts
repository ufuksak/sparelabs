import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class accessibilityFeatures {
    @IsString()
    @IsNotEmpty()
    type: string

    @IsNumber()
    @IsNotEmpty()
    count: string

    @IsNumber()
    @IsNotEmpty()
    seatCost: string

    @IsBoolean()
    @IsNotEmpty()
    requireFirstInLastOut: boolean
}
