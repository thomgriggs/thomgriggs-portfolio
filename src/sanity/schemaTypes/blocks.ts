import {defineType} from 'sanity'
export const blocks = defineType({
  name: 'blocks',
  title: 'Blocks',
  type: 'array',
  of: [
    {type: 'block'},
    {type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string', title: 'Alt'}]},
  ],
})
