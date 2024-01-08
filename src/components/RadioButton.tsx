import styled from 'styled-components';

//Define a type for the custom props
type StyledRadioButtonProps = {
  isChecked: boolean;
};

type RadioButtonProps = {
  text: string;
  name: string;
  formik: any;

};

function RadioButton({ text, name, formik }: RadioButtonProps) {

  const handleCheck = (event: React.MouseEvent<HTMLLabelElement>) => {
    // Prevent the default action
    event.preventDefault();
  
    // Determine the new value
    const newValue = !formik.values[name];
  
    // Log the new value
    console.log(`Radio Button Clicked - New Value: ${newValue}`);
  
    // Update the Formik state
    formik.setFieldValue(name, newValue);
  };
  

  return (
    <RadioButtonContainer onClick={handleCheck}>
      <HiddenCheckBox
      name={name}
        checked={formik.values[name]}
        onChange={() => {}}
        onBlur={formik.handleBlur}
      />
      <StyledRadioButton isChecked={formik.values[name]} />
      <Label>{text}</Label>
    </RadioButtonContainer>
  );
}

const RadioButtonContainer = styled.label`
  display: flex;
  cursor: pointer;
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
      transform: scale(1); // This makes the radio button appear filled
    }
  `}
`;



const Label = styled.span`
  color: ${({ theme }) => theme.text};
`;

const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;


export default RadioButton;
