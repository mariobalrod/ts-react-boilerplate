import React from 'react';

const Wrapper = (Story, context) => {
  return <Story {...context} />;
};

export const decorators = [Wrapper];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};