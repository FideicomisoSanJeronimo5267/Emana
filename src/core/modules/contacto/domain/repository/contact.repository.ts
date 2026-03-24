import { Contact } from "../entity/contact.entity";

export interface ContactRepository {
  save(contact: Contact): Promise<void>;
}