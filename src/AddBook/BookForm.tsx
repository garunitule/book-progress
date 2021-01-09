import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import InputText from '../Components/InputText';

type Props = {
  name: string;
  handleOnChange: (bookName: string) => void;
  handleOnClick: () => void;
};

const BookForm: React.FC<Props> = ({ name, handleOnChange, handleOnClick }) => (
  <Message
    header="読みたい本を追加しましょう！"
    content={(
      <>
        <InputText
          name={name}
          handleOnChange={handleOnChange}
        />
        <Button
          primary
          onClick={() => handleOnClick()}
        >
          追加
        </Button>
      </>
    )}
  />
);

export default BookForm;
