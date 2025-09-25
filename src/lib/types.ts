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
export type SiteSettings = {
  title: string
  navLinks?: {label: string; href: string}[]
  footerNote?: string
}

export type HomePage = {
  heroEyebrow?: string
  heroTitle: string
  heroSubtitle?: string
  ctaPrimaryLabel?: string
  ctaPrimaryUrl?: string
  ctaSecondaryLabel?: string
  ctaSecondaryUrl?: string
  featuredProjects?: any[]
}

export type AboutPage = {
  title: string
  portrait?: { asset?: { url?: string }; alt?: string }
  body?: any
}

export type ContactPage = {
  title: string
  body?: any
  contacts?: { label?: string; value?: string; url?: string }[]
}
