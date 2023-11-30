import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { Slug } from '@sanity/types';
import type { CloudinaryAsset, CloudinaryAssetContextCustom } from 'sanity-plugin-cloudinary';
import groq from 'groq';

import {
  PUBLIC_SANITY_STUDIO_PROJECT_ID as projectId,
  PUBLIC_SANITY_STUDIO_DATASET as dataset
} from '$env/static/public';

if (!projectId || !dataset) {
  throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-11-28' // date of setup
});

export async function getWorks(): Promise<Work[]> {
  return await client.fetch(
    groq`*[_type == "work" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getWork(slug: string): Promise<Work> {
  return await client.fetch(groq`*[_type == "work" && slug.current == $slug][0]`, {
    slug
  });
}

export type SectionHeading = {
  _type: 'sectionHeading';
  _key: string;
  number: number;
  title: string;
};

export type Freeform = {
  _type: 'freeform';
  _key: string;
  content: PortableTextBlock[];
  maxWidth?: string;
};

export type CloudinaryImage = CloudinaryAsset & {
  _type: 'cloudinary.asset';
  context: CloudinaryAssetContextCustom;
};

export type AutoGridItem = Freeform | CloudinaryImage;

export type AutoGrid = {
  _type: 'autoGrid';
  _key: string;
  items: AutoGridItem[];
  size?: string;
};

export type WorkContent = Freeform | AutoGrid | SectionHeading | CloudinaryImage;

export interface Work {
  _type: 'work';
  _createdAt: string;
  title?: string;
  slug: Slug;
  tags?: string[];
  description?: string;
  mainImage?: CloudinaryImage;
  body: WorkContent[];
}
