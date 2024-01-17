import styled from 'styled-components';
import { FormikProps } from 'formik';

// Interface for the form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
  street: string;
  zipCode: string;
  city: string;
  termsAccepted: boolean;
}

//Define a type for the custom props
type StyledRadioButtonProps = {
  isChecked: boolean;
};

// Define a type for the keys of the boolean values in the form
type BooleanKeys = {
  [K in keyof FormValues]: FormValues[K] extends boolean ? K : never;
}[keyof FormValues];

// Define a type for the props
type RadioButtonProps = {
  text: string;
  name: BooleanKeys;
  formik: FormikProps<FormValues>;
};

function RadioButton({ text, name, formik }: RadioButtonProps) {
  const handleCheck = (event: React.MouseEvent<HTMLLabelElement>) => {
    // Prevent the default behaviour of the click event so that the checkbox doesn't get checked twice
    event.preventDefault();
    // Toggle the value of the checkbox
    const newValue = !formik.values[name];
    // Set the new value of the checkbox
    formik.setFieldValue(name, newValue);
    // Set the field as touched
    formik.setFieldTouched(name, true, false);
  };

  // It needs an onChange handler but the code works without it so we just pass a dummy function.
  const dummyOnChange = () => {};

  return (
    <RadioButtonContainer onClick={handleCheck}>
      <HiddenCheckBox
        name={name}
        checked={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={dummyOnChange}
      />
      <StyledRadioButton isChecked={formik.values[name]} />
      <Label>{text}</Label>
    </RadioButtonContainer>
  );
}

// Styled components
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

  // If the radio button is checked, show the inner circle
  ${({ isChecked }) =>
    isChecked &&
    `
    &::after {
      transform: scale(1);
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
