import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "src/modules/shared/repositories/base.repository";
import { VacationRegisterRequestDto } from "../dtos/vacation-register.dto";
import { VacationInterface } from "../interface/vacation.interface";
import { Vacation } from "../schemas/vacation.schema";




@Injectable()
export class VacationRepository extends BaseRepository<VacationInterface> {

  //findOneAndUpdate: any getByCnpj;

  constructor(
    @InjectModel(Vacation.name) private readonly _model: Model<VacationInterface>,
  ) {
    super(_model);
  }



  async deleteProduct(_id: string): Promise<VacationInterface> {
    return await this._model.findByIdAndDelete(_id);
  }



}