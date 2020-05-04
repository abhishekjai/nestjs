import { PipeTransform, BadRequestException } from "@nestjs/common";

export class TaskStatusValidationPipe implements PipeTransform {

    readonly allowedStatuses= [
        "OPEN",
        "IN_PROGRESS",
        "DONE"
    ]


    transform(value :any ){
        console.log('value',value);
        
        if(!this.isValidStatus(value)){
            throw new BadRequestException(`"${value}" is not a valid status`);
        }
        
        return value;
    }

    private isValidStatus(status: any){
        const idx = this.allowedStatuses.indexOf(status);
        return idx!==-1;
    }
}