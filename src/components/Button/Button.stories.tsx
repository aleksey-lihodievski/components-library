import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  // args: { onPress: () => console.log('Button pressed!') },

  argTypes: {
    color: {
      type: { name: 'enum', value: ['default', 'primary', 'secondary', 'danger', 'warning'] },
    },

    size: {
      type: { name: 'enum', value: ['small', 'medium', 'large'] },
    },

    isLoading: {
      type: 'boolean',
    },

    isDisabled: {
      type: 'boolean',
    },

    children: {
      type: 'string',
    },

    style: {
      type: {
        name: 'object',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  size: 'medium',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'medium',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'medium',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
  size: 'medium',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  size: 'medium',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Loading = Template.bind({});
Loading.args = {
  color: 'default',
  size: 'medium',
  isLoading: true,
  isDisabled: false,
  children: 'Hello world!',
};

export const Small = Template.bind({});
Small.args = {
  color: 'default',
  size: 'small',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Large = Template.bind({});
Large.args = {
  color: 'default',
  size: 'large',
  isLoading: false,
  isDisabled: false,
  children: 'Hello world!',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'default',
  size: 'medium',
  isLoading: false,
  isDisabled: true,
  children: 'Hello world!',
};
