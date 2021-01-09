import React from 'react';
import { Input } from 'semantic-ui-react';

type Props = {
  name: string;
  handleOnChange: (name: string) => void
};

const InputText: React.FC<Props> = ({ name, handleOnChange }) => (
  <Input
    value={name}
    onChange={(e) => handleOnChange(e.target.value)}
    placeholder="本を追加しましょう！"
  />
);

export default InputText;
