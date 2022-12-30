import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (properties) => (
  <Spinner {...properties} />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
};
