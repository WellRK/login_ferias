import { BadRequestException, Injectable } from "@nestjs/common";
import { BaseService } from "src/modules/shared/services/base.service";
import { VacationRegisterRequestDto } from "../dtos/vacation-register.dto";
import { VacationInterface } from "../interface/vacation.interface";
import { VacationRepository } from "../repositories/vacation.repository";
import * as moment from 'moment';







@Injectable()
export class VacationService extends BaseService<VacationInterface> {

    constructor(
        private readonly _repository: VacationRepository,
    ) {
        super(_repository)
    }

    override async register(item: VacationRegisterRequestDto): Promise<VacationInterface> {


        // const startDate = new Date(item.startDate);
        // if (startDate.getTime() - hireDate.getTime() < 365 * 24 * 60 * 60 * 1000) {
        // throw new Error('As férias só podem ser agendadas 12 meses após a data de contratação');
        // }


        // const totalDays = (new Date(item.endDate).getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);
        // if (totalDays < 14 || totalDays > 30) {
        // throw new Error('As férias não podem ser inferiores a 14 dias corridos e não podem exceder 30 dias');
        // }

        return this._repository.register(item);

    }






    async deleteProduct(_id: string): Promise<VacationInterface> {
        return await this._repository.deleteProduct(_id);
    }


}