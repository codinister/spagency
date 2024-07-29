import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'setting',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'comp_name',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'comp_location',
      title: 'Company Location',
      type: 'string',
    }),
    defineField({
      name: 'comp_email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comp_phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
