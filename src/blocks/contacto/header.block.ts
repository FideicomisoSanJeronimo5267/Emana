import { Block } from "payload";

export const ContactoHeaderBlock: Block = {
    slug: 'contactoHeader',
    fields: [
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
    ],
}
