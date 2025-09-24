import groq from 'groq';
import { client } from './sanity.client';
import type { Project } from './types';

const PROJECT_FIELDS = groq`{
	_id,
	title,
	year,
	role,
	slug,
	summary,
	stack,
	metrics,
	coverImage{ asset-> { url } },
	gallery[]{ asset-> { url } }
}`;

export async function getAllProjects(): Promise<Project[]> {
	const query = groq`*[_type == "project"]|order(year desc)${PROJECT_FIELDS}`;
	return await client.fetch(query);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
	const query = groq`*[_type == "project" && slug.current == $slug][0]${PROJECT_FIELDS}`;
	return await client.fetch(query, { slug });
}
