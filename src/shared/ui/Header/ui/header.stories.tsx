import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (arguments_) => <Header />;

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
