import { Expose } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class Grid {
    @Expose()
    @IsString()
    @IsNotEmpty()
    GRID_NAME: string

    @Expose()
    @IsString()
    @IsNotEmpty()
    USER_FUNCTION_NAME: string

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    GRID_ID: number

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    NUMBER_OF_ROWS_FIRST_RETURNED: number

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    CURSOR_POSITION: number

    @Expose()
    CURRENT_TAB_NAME: string

    @Expose()
    TAB_NAME: string

    @Expose()
    RESULT_IN_SAXORDER: string

    @Expose()
    TERSERESPONSE: string

    @Expose()
    LOCALIZE_RESULT: string
    @Expose()
    CUSTOM_FIELDS_CLASS_FILTER: string
}

export class GridType {
    @IsString()
    @IsNotEmpty()
    TYPE: string
}

export class Dataspy {
    @IsNumber()
    @IsNotEmpty()
    DATASPY_ID: number
}

export class Lov {
    LOV_PARAMETERS: LovParameters
}

export class LovParameters {
    LOV_PARAMETER: LovParameter[]
}

export class LovParameter {
    ALIAS_NAME: string
    TYPE: string
    VALUE: string
}

export class GridModel {

    @Expose()
    @IsNotEmpty()
    GRID: Grid

    @Expose()
    @IsNotEmpty()
    GRID_TYPE: GridType

    @Expose()
    @IsNotEmpty()
    DATASPY: Dataspy

    @Expose()
    @IsNotEmpty()
    LOV: Lov

    @IsString()
    @IsNotEmpty()
    REQUEST_TYPE: string
}
