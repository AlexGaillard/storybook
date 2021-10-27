import React from 'react';

import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {},
}

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Title',
}

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Title'
}