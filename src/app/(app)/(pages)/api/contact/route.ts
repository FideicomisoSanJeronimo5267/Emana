import { CreateContactController } from "@/src/core/modules/contacto/infrastructure/controller/create-contact.controller";

export async function POST(request: Request) {
  return CreateContactController.run(request);
}