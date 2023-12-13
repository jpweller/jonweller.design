import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getWork } from '$lib/sanity/sanity';

export const ssr = false;

export const load = (async () => {
  const post = await getWork('spline');
  if (post) return post;

  throw error(404, 'Not found');
}) satisfies PageLoad;
