import { defineField, defineType } from 'sanity';
import { blocks } from './blocks';
export default defineType({
	name: 'contactPage',
	title: 'Contact',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (r) => r.required(),
		}),
		defineField({ ...blocks, name: 'body', title: 'Body' }),
		defineField({
			name: 'contacts',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'label', type: 'string' },
						{ name: 'value', type: 'string' },
						{ name: 'url', type: 'url' },
					],
				},
			],
		}),
	],
});
