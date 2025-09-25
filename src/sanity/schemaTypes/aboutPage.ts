import { defineField, defineType } from 'sanity';
import { blocks } from './blocks';
export default defineType({
	name: 'aboutPage',
	title: 'About',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (r) => r.required(),
		}),
		defineField({
			name: 'portrait',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', type: 'string', title: 'Alt' }],
		}),
		defineField({ ...blocks, name: 'body', title: 'Body' }),
	],
});
