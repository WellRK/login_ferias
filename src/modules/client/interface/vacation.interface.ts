import { BaseInterface } from "src/modules/shared/interfaces/base.interface";



export interface VacationInterface extends BaseInterface {
    
    name: string;
    position: string;
    hireDate: Date;
    startDate: string[];
    endDate: string[];
  }