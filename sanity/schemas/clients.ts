import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Client',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
