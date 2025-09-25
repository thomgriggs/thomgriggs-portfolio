import { client } from './sanity.client';

export async function getAllProjects() {
	return client.fetch(`*[_type=="project"]|order(coalesce(order, _createdAt) desc){
    _id, title, "slug": slug.current, year, company, role, summary, stack,
    "coverImage": {"url": coverImage.asset->url},
    "gallery": gallery[]{ "url": asset->url, alt }
  }`);
}

export async function getProjectBySlug(slug: string) {
	return client.fetch(
		`*[_type=="project" && slug.current==$slug][0]{
    _id, title, "slug": slug.current, year, company, role, summary, stack,
    links[]{label, url},
    "coverImage": {"url": coverImage.asset->url, alt},
    "gallery": gallery[]{ "url": asset->url, alt }
  }`,
		{ slug }
	);
}

export async function getAllProjectSlugs() {
	return client.fetch(
		`*[_type=="project" && defined(slug.current)][].slug.current`
	);
}

export async function getSiteSettings() {
	return client.fetch(`*[_type=="siteSettings"][0]{title,navLinks,footerNote}`);
}

export async function getHomePage() {
	return client.fetch(`*[_type=="homePage"][0]{
    heroEyebrow,heroTitle,heroSubtitle,
    ctaPrimaryLabel,ctaPrimaryUrl,ctaSecondaryLabel,ctaSecondaryUrl,
    "featuredProjects": featuredProjects[]->{
      _id, title, "slug": slug.current, year, company, role,
      summary, stack, "coverImage": {"url": coverImage.asset->url}
    }
  }`);
}

export async function getAboutPage() {
	return client.fetch(`*[_type=="aboutPage"][0]{
    title,
    "portrait": { "url": portrait.asset->url, alt: portrait.alt },
    body
  }`);
}

export async function getContactPage() {
	return client.fetch(`*[_type=="contactPage"][0]{ title, body, contacts }`);
}
