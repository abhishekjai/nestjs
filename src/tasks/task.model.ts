export interface Task{
    id: string;
    title : string;
    descripation : string;
    status : Task_Status;
}

export enum Task_Status{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}