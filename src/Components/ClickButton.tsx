import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  text: string,
  handleOnClick: () => void
};

const ClickButton: React.FC<Props> = ({ text, handleOnClick }) => (
  <Button onClick={() => handleOnClick()}>
    {text}
  </Button>
);

export default ClickButton;
