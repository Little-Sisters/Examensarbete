import styled from 'styled-components';
import { useState } from 'react';

//Define a type for the custom props
type StyledRadioButtonProps = {
  isChecked: boolean;
};

type RadioButtonProps = {
    text: string;
};

//TODO
//Connect to check out logic
function RadioButton({ text }: RadioButtonProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <RadioButtonContainer>
      <HiddenCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
      />
      <StyledRadioButton isChecked={isChecked} />
      <Label onClick={handleCheck}>{text}</Label>
    </RadioButtonContainer>
  );
}

const RadioButtonContainer = styled.label`
  display: flex;
  cursor: pointer;
`;

const HiddenCheckBox = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

const StyledRadioButton = styled.div<StyledRadioButtonProps>`
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.text};
  }

  ${({ isChecked }) =>
    isChecked &&
    `
    &::after {
      transform: scale(1); // Scale up to fill the radio button
    }
  `}


  ${HiddenCheckBox}:checked + &::after {
    transform: scale(1);
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.text};
`;

export default RadioButton;
