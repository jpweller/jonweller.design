import { defineType } from 'sanity';
import { TextIcon } from '@sanity/icons';

export default defineType({
  title: 'Section heading',
  name: 'sectionHeading',
  type: 'object',
  icon: TextIcon,
  fields: [
    {
      title: 'Number',
      name: 'number',
      type: 'number'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      number: 'number',
      title: 'title'
    },
    prepare(selection) {
      const { title, number } = selection;
      return {
        title: `Section heading`,
        subtitle: `${number} - ${title}`
      };
    }
  }
});
