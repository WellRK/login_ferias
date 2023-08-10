import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Logger, Param, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ResponseDto } from "src/modules/shared/dtos/response.dto";
import { JwtClientAuthGuard } from "src/modules/shared/guards/jwt-client-auth.guard";
import { VacationRegisterRequestDto } from "../dtos/vacation-register.dto";
import { VacationInterface } from "../interface/vacation.interface";
import { VacationService } from "../services/vacation.service";




@ApiTags('vacation')
@Controller('vacation')
export class VacationController {
  private readonly logger = new Logger(VacationController.name);

  constructor(
    private readonly _vacationService: VacationService,
  ) { }

  @Post('register')
  @HttpCode(201)
  @UseGuards(JwtClientAuthGuard)
  @ApiBearerAuth()
  async register(@Body() dto: VacationRegisterRequestDto) {
    try {
      const response = await this._vacationService.register(
        dto as VacationInterface,
      );

      return new ResponseDto(true, response, null);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(
        new ResponseDto(false, null, [error.message]),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  @HttpCode(200)
  @UseGuards(JwtClientAuthGuard)
  @ApiBearerAuth()
  async list(
  ) {

    try {

      const response = await this._vacationService.list();

      return new ResponseDto(
        true,
        response,
        null,
      );


    } catch (error) {
      this.logger.error(error.message);

      throw new HttpException(
        new ResponseDto(false, null, [error.message]),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('id/:id')
  @HttpCode(200)
  @UseGuards(JwtClientAuthGuard)
  @ApiBearerAuth()
  async get(@Param('id') _id: string) {
    try {
      const response = await this._vacationService.getById(_id);
      return new ResponseDto(true, response, null);
    } catch (error) {
      this.logger.error(error.message);

      throw new HttpException(
        new ResponseDto(false, null, [error.message]),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete/id/:id')
  @HttpCode(200)
  @UseGuards(JwtClientAuthGuard)
  @ApiBearerAuth()
  async deletar(@Param('id') id: string) {
    try {
      const response = await this._vacationService.deleteProduct(id);

      return new ResponseDto(
        true,
        response,
        null,
      );
    } catch (error) {
      throw new HttpException(
        new ResponseDto(false, null, [error.message]),
        HttpStatus.BAD_REQUEST,
      );
    }
  }



}