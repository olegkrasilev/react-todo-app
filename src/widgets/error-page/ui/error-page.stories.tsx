import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorPage } from './error-page';

export default {
  title: 'ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (arguments_) => (
  <ErrorPage />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
