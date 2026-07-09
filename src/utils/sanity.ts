import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export interface SanityImage {
  _key?: string;
  alt?: string;
  asset?: {
    _id: string;
    url?: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface ProjectSummary {
  id: string;
  title: string;
  category?: string;
  description?: string;
}

export interface Project extends ProjectSummary {
  longDescription?: string;
  features: string[];
  tech: string[];
  preview?: string;
  github?: string;
  sliderImages: SanityImage[];
}

export interface ExperienceItem {
  _key?: string;
  period: string;
  role: string;
  company?: string;
  description: string;
}

export interface SiteProfile {
  techStack: string[];
  experienceTitle: string;
  experienceSubtitle: string;
  experience: ExperienceItem[];
}

const DEFAULT_SITE_PROFILE: SiteProfile = {
  techStack: ['Next.js', 'Astro', 'Django', 'Node.js', 'UI/UX Design'],
  experienceTitle: 'Doświadczenie.',
  experienceSubtitle:
    'Droga od pierwszych linii kodu po architekturę złożonych aplikacji.',
  experience: [
    {
      period: 'Obecnie',
      role: 'Senior Full-Stack Developer',
      company: 'Niezależny Kontraktor',
      description:
        'Projektowanie i wdrażanie zaawansowanych aplikacji internetowych typu SaaS. Główny nacisk na wydajność i architekturę zorientowaną na użytkownika.',
    },
    {
      period: '2023',
      role: 'Frontend Architect',
      company: 'Startup technologiczny',
      description:
        'Kierowanie zespołem odpowiedzialnym za migrację rozbudowanej platformy e-commerce oraz wdrożenie systemu Design Tokens.',
    },
    {
      period: '2021',
      role: 'Mid Web Developer',
      company: 'Agencja interaktywna',
      description:
        'Tworzenie interaktywnych stron z użyciem WebGL i GSAP oraz współpraca z designerami nad płynnymi interfejsami.',
    },
    {
      period: '2019',
      role: 'Junior Developer',
      company: 'Software House',
      description:
        'Rozwój narzędzi CMS opartych o React, budowa interfejsów administracyjnych i nauka pisania testowalnego kodu.',
    },
  ],
};

export const sanityClient = createClient({
  projectId: '3tqu1b7o',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2023-05-03',
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

const PROJECT_SUMMARIES_QUERY = `
  *[_type == "project" && defined(slug.current)]
  | order(_createdAt asc) {
    "id": slug.current,
    title,
    category,
    description
  }
`;

const PROJECT_SLUGS_QUERY = `
  *[_type == "project" && defined(slug.current)] {
    "id": slug.current
  }
`;

const PROJECT_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    "id": slug.current,
    title,
    category,
    description,
    longDescription,
    features,
    tech,
    preview,
    github,
    sliderImages[] {
      _key,
      alt,
      crop,
      hotspot,
      asset-> {
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      }
    }
  }
`;

const SITE_PROFILE_QUERY = `
  *[_type == "siteProfile" && _id == "siteProfile"][0] {
    techStack,
    experienceTitle,
    experienceSubtitle,
    experience[] {
      _key,
      period,
      role,
      company,
      description
    }
  }
`;

export async function getProjects(): Promise<ProjectSummary[]> {
  try {
    return (await sanityClient.fetch<ProjectSummary[]>(PROJECT_SUMMARIES_QUERY)) ?? [];
  } catch (error) {
    console.warn('Sanity fetch failed for project summaries', error);
    return [];
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const projects =
      (await sanityClient.fetch<Array<{ id: string }>>(PROJECT_SLUGS_QUERY)) ?? [];

    return projects.map(({ id }) => id).filter(Boolean);
  } catch (error) {
    console.warn('Sanity fetch failed for project slugs', error);
    return [];
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    const project = await sanityClient.fetch<Project | null>(PROJECT_QUERY, { slug });

    if (!project) return null;

    return {
      ...project,
      features: project.features ?? [],
      tech: project.tech ?? [],
      sliderImages: project.sliderImages ?? [],
    };
  } catch (error) {
    console.warn(`Sanity fetch failed for project "${slug}"`, error);
    return null;
  }
}

export async function getSiteProfile(): Promise<SiteProfile> {
  try {
    const profile = await sanityClient.fetch<Partial<SiteProfile> | null>(
      SITE_PROFILE_QUERY,
    );

    if (!profile) return DEFAULT_SITE_PROFILE;

    const techStack = profile.techStack?.filter(Boolean) ?? [];

    return {
      techStack:
        techStack.length > 0 ? techStack : DEFAULT_SITE_PROFILE.techStack,
      experienceTitle:
        profile.experienceTitle || DEFAULT_SITE_PROFILE.experienceTitle,
      experienceSubtitle:
        profile.experienceSubtitle || DEFAULT_SITE_PROFILE.experienceSubtitle,
      experience:
        profile.experience?.length
          ? profile.experience
          : DEFAULT_SITE_PROFILE.experience,
    };
  } catch (error) {
    console.warn('Sanity fetch failed for site profile', error);
    return DEFAULT_SITE_PROFILE;
  }
}
