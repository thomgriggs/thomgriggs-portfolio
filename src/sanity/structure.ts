import { StructureResolver } from 'sanity/structure';
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Site Settings')
				.child(
					S.editor().schemaType('siteSettings').documentId('siteSettings')
				),
			S.listItem()
				.title('Home')
				.child(S.editor().schemaType('homePage').documentId('homePage')),
			S.listItem()
				.title('About')
				.child(S.editor().schemaType('aboutPage').documentId('aboutPage')),
			S.listItem()
				.title('Contact')
				.child(S.editor().schemaType('contactPage').documentId('contactPage')),
			S.divider(),
			S.documentTypeListItem('project'),
		]);
