import { NextResponse } from "next/server";
import { ContactRepositoryImpl } from "../repository/contact.repository.impl";
import { GHLDatasource } from "../datasource/ghl.datasource";
import { ENV } from "@/src/core/config/env";
import { CreateContactUseCase } from "../use_cases/create-contact.use-case";

export class CreateContactController {
  static async run(request: Request) {
    try {
      const body = await request.json();

      if (!ENV.GHL_API_KEY || !ENV.GHL_LOCATION_ID) {
        console.error("Faltan variables de entorno de GHL");
        return NextResponse.json({ error: "Configuration Error" }, { status: 500 });
      }

      const datasource = new GHLDatasource(ENV.GHL_API_KEY);
      const repository = new ContactRepositoryImpl(datasource, ENV.GHL_LOCATION_ID);
      const useCase = new CreateContactUseCase(repository);

      await useCase.execute({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
      });

      return NextResponse.json({ success: true }, { status: 201 });

    } catch (error: any) {
      console.error("Error en ContactController:", error);
      return NextResponse.json(
        { error: error.message || "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}