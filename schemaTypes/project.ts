import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				slugify: (input) =>
					input
						.toLowerCase()
						.normalize('NFKD')
						.replace(/[\u0300-\u036f]/g, '')
						.replace(/[^a-z0-9]+/g, '-')
						.replace(/(^-|-$)+/g, '')
						.slice(0, 96),
			},
			validation: (r) => r.required(),
		}),
		defineField({ name: 'year', type: 'string' }),
		defineField({ name: 'role', type: 'string' }),
		defineField({ name: 'company', type: 'string' }),
		defineField({ name: 'summary', type: 'text' }),
		defineField({ name: 'stack', type: 'array', of: [{ type: 'string' }] }),
		defineField({
			name: 'links',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'label', type: 'string' },
						{ name: 'url', type: 'url' },
					],
				},
			],
		}),
		defineField({
			name: 'coverImage',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', type: 'string' }],
		}),
		defineField({
			name: 'gallery',
			type: 'array',
			of: [
				{
					type: 'image',
					options: { hotspot: true },
					fields: [{ name: 'alt', type: 'string' }],
				},
			],
		}),
	],
});
