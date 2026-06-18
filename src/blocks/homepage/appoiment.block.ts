
import type { Block } from 'payload'

export const AppointmentBlock: Block = {
    slug: 'appointment',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'coverImage',
            type: 'text',
        },
        {
            name: 'blurDataURL',
            type: 'text',
        },
    ]
}