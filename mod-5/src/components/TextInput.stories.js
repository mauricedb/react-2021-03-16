import { useState } from 'react';

import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    label: '',
    value: '',
  },
  argTypes: {
    onChange: { action: 'The on change event' },
  },
};

export function Basic(args) {
  return <TextInput {...args} />;
}

export function WithLabelAndValue(args) {
  return <TextInput {...args} />;
}

WithLabelAndValue.args = {
  label: 'Some label',
  value: 'The value',
};

export function WithLabelAndValueAndState() {
  const [value, setValue] = useState('Some value');
  return (
    <TextInput
      label="Some label"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function WithError(args) {
  return <TextInput error="An error" {...args} />;
}
