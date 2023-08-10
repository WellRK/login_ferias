import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Vacation2Schema } from "./vacation2.schema";

@Schema({ timestamps: true, collection: Vacation.name.toLowerCase() })
export class Vacation {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true })
    position: String;

    @Prop({ required: true })
    hireDate: Date;

    @Prop({ required: true })
    startDate: Date[];

    @Prop({ required: true})
    endDate: Date[];
};
  
export const VacationSchema = SchemaFactory.createForClass(Vacation);

