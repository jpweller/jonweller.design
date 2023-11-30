import { defineType } from 'sanity';
import { BlockContentIcon } from '@sanity/icons';

export default defineType({
  title: 'Freeform',
  name: 'freeform',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent'
    },
    {
      title: 'Max width (optional)',
      description: 'Apply a max-width to this block (may help with legibility)',
      name: 'maxWidth',
      type: 'string',
      options: {
        list: [
          { title: 'Large', value: 'max-width-lg' },
          { title: 'Medium (most optimal)', value: 'max-width-md' },
          { title: 'Small', value: 'max-width-sm' }
        ]
      }
    }
  ],
  preview: {
    select: {
      content: 'content',
      maxWidth: 'maxWidth'
    },
    prepare(selection) {
      const content = selection.content;
      const maxWidth = selection.maxWidth
        ? `(max width: ${selection.maxWidth.replace('max-width-', '')})`
        : '';
      return {
        title: `Freeform ${maxWidth}`,
        subtitle: content && content[0]?.children[0]?.text
      };
    }
  }
});
