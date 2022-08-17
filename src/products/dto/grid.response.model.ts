
export class Data {
    Result: Result
    ConfirmationAlert: any
    ErrorAlert: any[]
}

export class Result {
    SessionID: any
    ResultData: ResultData
    InfoAlert: any
    WarningAlert: any
}

export class ResultData {
    DATAENTITYNAME: string
    CURRENTCURSORPOSITION: number
    DATARECORD: Datarecord[]
}

export class Datarecord {
    DATAFIELD: Datafield[]
}

export class Datafield {
    FIELDNAME: string
    FIELDLABEL: string
    DATATYPE: string
    FIELDVALUE: string
    ISKEYFIELD: boolean
}

export class GridResponseModel {
    data: Data
}
