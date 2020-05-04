import {Task_Status} from '../task.model'

export class GetTaskFilterDto{
    status : Task_Status;
    search : string;
}