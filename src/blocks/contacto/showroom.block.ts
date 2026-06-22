import { Block } from "payload";

export const ContactoShowroomBlock: Block = {
    slug: 'contactoShowroom',
    fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'text' },
        { name: 'address', type: 'textarea' },
        { name: 'whatsapp', type: 'text' },
        { name: 'hours', type: 'textarea' },
        { name: 'latitude', type: 'number' },
        { name: 'longitude', type: 'number' },
    ],
}
