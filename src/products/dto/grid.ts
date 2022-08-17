import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class Grid {

    @IsString()
    @IsNotEmpty()
    GRID_NAME: string

    @IsString()
    @IsNotEmpty()
    USER_FUNCTION_NAME: string

    @IsNumber()
    @IsNotEmpty()
    GRID_ID: number

    @IsNumber()
    @IsNotEmpty()
    NUMBER_OF_ROWS_FIRST_RETURNED: number

    @IsNumber()
    @IsNotEmpty()
    CURSOR_POSITION: number

    CURRENT_TAB_NAME: string
    TAB_NAME: string
    RESULT_IN_SAXORDER: string
    TERSERESPONSE: string
    LOCALIZE_RESULT: string
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
    @IsNotEmpty()
    GRID: Grid

    @IsNotEmpty()
    GRID_TYPE: GridType

    @IsNotEmpty()
    DATASPY: Dataspy

    @IsNotEmpty()
    LOV: Lov

    @IsString()
    @IsNotEmpty()
    REQUEST_TYPE: string
}
