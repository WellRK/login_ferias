import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty } from 'class-validator';

export class VacationRegisterRequestDto {
    
      @ApiProperty({ type: String })
      name: string;

      @ApiProperty({ type: String })
      position: string;

      @ApiProperty({ type: String})
      hireDate: Date;

      @ApiProperty({ type: String })
      startDate: string[];

      @ApiProperty({ type: String })
      endDate: string[];
  }

 
  