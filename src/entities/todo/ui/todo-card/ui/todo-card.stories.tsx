import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TodoCard } from './todo-card';

export default {
  title: 'TodoCard',
  component: TodoCard,
} as ComponentMeta<typeof TodoCard>;

const Template: ComponentStory<typeof TodoCard> = (arguments_) => (
  <TodoCard {...arguments_} />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  id: 1,
  completed: false,
  title: 'Todo',
};
