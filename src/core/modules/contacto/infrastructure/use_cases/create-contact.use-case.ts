import { Contact } from "../../domain/entity/contact.entity";
import { ContactRepository } from "../../domain/repository/contact.repository";


export class CreateContactUseCase {
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(contact: Contact): Promise<void> {
    if (!contact.email && !contact.phone) {
      throw new Error("Se requiere al menos un medio de contacto (email o teléfono).");
    }

    await this.contactRepository.save(contact);
  }
}