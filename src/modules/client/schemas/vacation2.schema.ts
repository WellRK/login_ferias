import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, collection: Vacation2.name.toLowerCase() })
export class Vacation2 {
    
    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: Date;
};

export const Vacation2Schema = SchemaFactory.createForClass(Vacation2);




