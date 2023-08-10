/* eslint-disable prettier/prettier */
import { ModelDefinition } from "@nestjs/mongoose";
import { Client, ClientSchema } from "src/modules/client/schemas/client.chema";
import { Tfa, TfaSchema } from "src/modules/client/schemas/tfa-schema";
import { Vacation, VacationSchema } from "src/modules/client/schemas/vacation.schema";
import { Vacation2, Vacation2Schema } from "src/modules/client/schemas/vacation2.schema";
import { Verification, VerificationSchema } from "src/modules/client/schemas/verification.schema";


export const schemasConfig: ModelDefinition[] = [
    { name: Client.name, schema: ClientSchema },
    { name: Verification.name, schema: VerificationSchema },
    { name: Tfa.name, schema: TfaSchema},
    { name: Vacation.name, schema: VacationSchema},
    { name: Vacation2.name, schema: Vacation2Schema},
]