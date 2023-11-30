import { defineType } from 'sanity';
import { ThLargeIcon } from '@sanity/icons';

export default defineType({
  title: 'Auto grid',
  name: 'autoGrid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'freeform' }]
    },
    {
      title: 'Grid size',
      description: 'What size should the grid be?',
      name: 'size',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'auto-grid--lg' },
          { title: 'Medium (default)', value: 'auto-grid--md' },
          { title: 'Small', value: 'auto-grid--sm' }
        ]
      }
    }
  ],
  preview: {
    select: {
      size: 'size',
      items: 'items'
    },
    prepare(selection) {
      const typeString = selection.size ? selection.size.replace('auto-grid--', '') : 'md';

      return {
        title: `Auto grid (size: ${typeString})`,
        subtitle: `${selection.items.length} items`
      };
    }
  }
});
