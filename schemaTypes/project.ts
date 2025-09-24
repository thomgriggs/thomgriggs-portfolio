export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')
            .slice(0, 96)
      }
    },
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'stack', title: 'Stack', type: 'array', of: [{ type: 'string' }] },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }
  ]
}
