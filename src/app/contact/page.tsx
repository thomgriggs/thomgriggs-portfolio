import { getContactPage } from '@/lib/sanity.queries';
import { Section } from '@/app/components/Section';
import { PortableText } from 'next-sanity';

export const revalidate = 300;

export default async function ContactPage() {
	const c = await getContactPage();
	return (
		<Section>
			<h1 className="h1">{c?.title}</h1>
			<div className="mt-4 grid grid-cols-12 gap-6">
				<div className="col-span-12 lg:col-span-8">
					{c?.body ? <PortableText value={c.body} /> : null}
				</div>
				<div className="col-span-12 lg:col-span-4">
					<div className="grid gap-2">
						{Array.isArray(c?.contacts)
							? c.contacts.map(
									(
										row: { label?: string; value?: string; url?: string },
										i: number
									) => (
										<a
											key={i}
											className="btn"
											href={row?.url || '#'}
											target={row?.url ? '_blank' : '_self'}
											rel="noreferrer"
										>
											{row?.label || ''}
											{row?.value ? `: ${row.value}` : ''}
										</a>
									)
								)
							: null}
					</div>
				</div>
			</div>
		</Section>
	);
}
