import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LangSwitcher } from './lang-switcher';

export default {
  title: 'LangSwitcher',
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (arguments_) => (
  <LangSwitcher />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
