import { Section } from '@/app/components/Section';
import { HomeContent } from '@/app/components/HomeContent';

export default async function Page() {
	return (
		<Section eyebrow="Welcome">
			<HomeContent />
		</Section>
	);
}
