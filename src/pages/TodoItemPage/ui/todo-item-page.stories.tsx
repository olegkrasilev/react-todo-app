import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoItemPage from './todo-item-page';

export default {
  title: 'TodoItemPage',
  component: TodoItemPage,
} as ComponentMeta<typeof TodoItemPage>;

const Template: ComponentStory<typeof TodoItemPage> = (arguments_) => (
  <TodoItemPage />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  completed: true,
  id: 1,
  title: 'Todo',
};
