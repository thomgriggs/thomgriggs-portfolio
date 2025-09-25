import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({name: 'heroEyebrow', type: 'string'}),
    defineField({name: 'heroTitle', type: 'string', validation: r => r.required()}),
    defineField({name: 'heroSubtitle', type: 'text'}),
    defineField({name: 'ctaPrimaryLabel', type: 'string'}),
    defineField({name: 'ctaPrimaryUrl', type: 'string'}),
    defineField({name: 'ctaSecondaryLabel', type: 'string'}),
    defineField({name: 'ctaSecondaryUrl', type: 'string'}),
    defineField({
      name: 'featuredProjects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
  ],
})
