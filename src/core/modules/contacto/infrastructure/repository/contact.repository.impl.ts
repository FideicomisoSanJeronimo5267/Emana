import { Contact } from "../../domain/entity/contact.entity";
import { ContactRepository } from "../../domain/repository/contact.repository";
import { GHLDatasource } from "../datasource/ghl.datasource";

export class ContactRepositoryImpl implements ContactRepository {
  constructor(
    private readonly datasource: GHLDatasource,
    private readonly locationId: string
  ) {}

  async save(contact: Contact): Promise<void> {
    const nameParts = contact.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    await this.datasource.postContact({
      locationId: this.locationId,
      firstName: firstName,
      lastName: lastName,
      email: contact.email,
      phone: contact.phone,
    });
  }
}