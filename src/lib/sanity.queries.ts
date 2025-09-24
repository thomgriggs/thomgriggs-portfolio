import { client } from './sanity.client';
import { groq } from 'next-sanity';

export const projectCardFields = groq`
  _id,
  title,
  year,
  role,
  company,
  slug,
  stack,
  links,
  coverImage{..., asset->{url}}
`;

export const projectDetailFields = groq`
  _id,
  title,
  year,
  role,
  company,
  summary,
  stack,
  links,
  slug,
  coverImage{alt, asset->{url}},
  gallery[]{alt, asset->{url}}
`;

export async function getAllProjects() {
	return client.fetch(
		groq`*[_type=="project"]|order(year desc,title asc){${projectCardFields}}`
	);
}

export async function getProjectBySlug(slug: string) {
	return client.fetch(
		groq`*[_type=="project" && slug.current==$slug][0]{${projectDetailFields}}`,
		{ slug }
	);
}
