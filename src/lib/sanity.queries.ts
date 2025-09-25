import { client } from './sanity.client'

/** -------- PROJECTS -------- */
export async function getAllProjects() {
  return client.fetch(`
    *[_type=="project"]|order(coalesce(orderRank, _createdAt) asc){
      _id,
      title,
      "slug": slug.current,
      year,
      company,
      role,
      summary,
      stack[],
      links[]{label, url},
      coverImage{ "asset": { "url": asset->url }, alt }
    }
  `)
}

export async function getProjectBySlug(slug: string) {
  if (!slug) return null
  return client.fetch(
    `
    *[_type=="project" && slug.current==$slug][0]{
      _id,
      title,
      "slug": slug.current,
      year,
      company,
      role,
      summary,
      stack[],
      links[]{label, url},
      coverImage{ "asset": { "url": asset->url }, alt },
      gallery[]{
        ...,
        "asset": { "url": asset->url },
        alt
      }
    }
  `,
    { slug }
  )
}

/** -------- SITE SETTINGS -------- */
export async function getSiteSettings() {
  return client.fetch(`*[_type=="siteSettings"][0]{
    title,
    "navLinks": coalesce(navLinks[], []){
      label, href
    },
    footerNote
  }`)
}

/** -------- PAGES -------- */
export async function getHomePage() {
  return client.fetch(`*[_type=="homePage"][0]{
    heroTitle,
    heroSubtitle,
    ctas[] { label, href }
  }`)
}

export async function getAboutPage() {
  return client.fetch(`*[_type=="aboutPage"][0]{
    title,
    body,
    portrait{
      "url": asset->url,
      alt
    },
    links[] { label, href }
  }`)
}

export async function getContactPage() {
  return client.fetch(`*[_type=="contactPage"][0]{
    title,
    contacts[]{ label, value, href }
  }`)
}
