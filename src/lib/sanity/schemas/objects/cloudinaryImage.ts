import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  title: 'Cloudinary image',
  name: 'cloudinaryImage',
  type: 'object',
  icon: ImageIcon,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'cloudinary.asset'
    },
    {
      title: 'Alt text',
      description: 'Alternative text for screen readers',
      name: 'alt',
      type: 'string'
    }
  ],
  preview: {
    select: {
      alt: 'alt'
    },
    prepare(selection) {
      return {
        title: 'Cloudinary Image',
        subtitle: selection.alt
      };
    }
  }
});
