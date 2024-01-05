import styled from 'styled-components';
import { useState } from 'react';

//Define a type for the custom props
type StyledRadioButtonProps = {
  isChecked: boolean;
};

function RadioButton() {
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
      <Label onClick={handleCheck}>I accept the terms and conditions</Label>
    </RadioButtonContainer>
  );
}

const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckBox = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

const StyledRadioButton = styled.div<StyledRadioButtonProps>`
  // Use the custom props type here
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isChecked, theme }) =>
    isChecked &&
    `
    background-color: ${theme.text};

    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
      transform: scale(1);
      transition: transform 0.2s ease-in-out;
    }
  `}

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    background-color: white;
  }

  ${HiddenCheckBox}:checked + &::after {
    transform: scale(1);
  }
`;

const Label = styled.span`
  color: ${({ theme }) => theme.text};
`;

export default RadioButton;
