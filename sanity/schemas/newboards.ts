import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'newboard',
  title: 'New Board',
  type: 'document',
  fields: [
    defineField({
      name: 'boardbame',
      title: 'Board Name',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
