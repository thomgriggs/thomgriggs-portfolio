export type ImageRef = { asset?: { url?: string } };
export type Slug = { current: string };
export type Metric = { label: string; value: string };
export type Project = {
	_id: string;
	title: string;
	year: string;
	role?: string;
	slug: Slug;
	summary?: string;
	stack?: string[];
	metrics?: Metric[];
	coverImage?: ImageRef;
	gallery?: ImageRef[];
};
