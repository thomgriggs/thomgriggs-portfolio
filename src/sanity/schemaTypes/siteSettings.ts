import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: r => r.required()}),
    defineField({
      name: 'navLinks',
      type: 'array',
      of: [{type: 'object', fields: [
        {name: 'label', type: 'string', validation: r => r.required()},
        {name: 'href', type: 'string', validation: r => r.required()},
      ]}],
    }),
    defineField({name: 'footerNote', type: 'string'}),
  ],
})
