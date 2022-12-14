import { ComponentMeta, ComponentStory } from '@storybook/react';

import TodoListPage from './todo-list-page';

export default {
  title: 'TodoListPage',
  component: TodoListPage,
} as ComponentMeta<typeof TodoListPage>;

const Template: ComponentStory<typeof TodoListPage> = (arguments_) => (
  <TodoListPage />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
