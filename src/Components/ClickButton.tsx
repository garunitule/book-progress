import React from 'react';

type Props = {
  text: string,
  handleOnClick: () => void
};

const ClickButton: React.FC<Props> = ({ text, handleOnClick }) => (
  <>
    <button type="button" onClick={() => handleOnClick()}>
      {text}
    </button>
  </>
);

export default ClickButton;
