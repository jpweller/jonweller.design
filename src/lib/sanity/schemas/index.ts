// Docs: https://www.sanity.io/docs/schema-types
// Icons: https://icons.sanity.build/all
// Borrowed a lot from: https://github.com/ndimatteo/HULL/

import work from './documents/work';

import autoGrid from './objects/autoGrid';
import freeform from './objects/freeform';
import sectionHeading from './objects/sectionHeading';

import blockContent from './arrays/blockContent';

export const schemaTypes = [
  // documents
  work,

  // objects
  autoGrid,
  freeform,
  sectionHeading,

  // arrays
  blockContent
];
