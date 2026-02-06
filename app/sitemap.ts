import { execSync } from 'child_process';
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { allServices } from '@/lib/services';
import { locations } from '@/lib/locations';

const gitDateCache = new Map<string, Date>();

function getGitDate(filePath: string): Date {
  if (gitDateCache.has(filePath)) {
    return gitDateCache.get(filePath)!;
  }
  try {
    const date = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: 'utf-8',
    }).trim();
    const result = date ? new Date(date) : new Date();
    gitDateCache.set(filePath, result);
    return result;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: getGitDate('app/page.tsx'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: getGitDate('app/about/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getGitDate('app/contact/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: getGitDate('app/locations/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pro-tips`,
      lastModified: getGitDate('app/pro-tips/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: getGitDate('app/privacy/page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: getGitDate('app/terms/page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const categories = ['cooling', 'heating', 'plumbing', 'electrical'] as const;
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/services/${category}`,
    lastModified: getGitDate(`app/services/${category}/page.tsx`),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.category}/${service.slug}`,
    lastModified: getGitDate(`lib/services/${service.category}.ts`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const locationDate = getGitDate('lib/locations.ts');
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: locationDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...servicePages, ...locationPages];
}
