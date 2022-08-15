import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { accessibilityFeatures } from './accessibilityFeatures.model'

export enum Color {
    'red' = 'red',
    'blue' = 'blue',
    'white' = 'white',
    'black' = 'black',
}

class autonomousVehicle {
    id: string

    @IsString()
    @IsNotEmpty()
    externalId: string

    createdAt: number

    updatedAt: number
}

export class Vehicle {
    @IsString()
    @IsNotEmpty()
    identifier: string

    @IsNotEmpty()
    @IsNumber()
    passengerSeats: number

    @IsString()
    @IsNotEmpty()
    licensePlate: string

    @IsString()
    @IsNotEmpty()
    make: string

    @IsEnum(Color)
    @IsNotEmpty()
    color: string

    @IsString()
    @IsNotEmpty()
    model: string

    @IsString()
    @IsNotEmpty()
    photoUrl: string

    @IsString()
    @IsNotEmpty()
    ownerUserId: string

    @IsNotEmpty()
    accessibilityFeatures: accessibilityFeatures[]

    @IsNotEmpty()
    autonomousVehicle: autonomousVehicle

    @IsNotEmpty()
    @IsNumber()
    emissionsRate: number
}
