import { getWorks } from '$lib/sanity/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
  const works = await getWorks();

  if (works) return { works };

  throw error(404, 'Not found');
}) satisfies PageLoad;
