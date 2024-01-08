import styled from 'styled-components';
import { FormikProps } from 'formik';

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

type BooleanKeys = {
  [K in keyof FormValues]: FormValues[K] extends boolean ? K : never;
}[keyof FormValues];

type RadioButtonProps = {
  text: string;
  name: BooleanKeys;
  formik: FormikProps<FormValues>;
};

function RadioButton({ text, name, formik }: RadioButtonProps) {
  const handleCheck = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const newValue = !formik.values[name];
    formik.setFieldValue(name, newValue);
    formik.setFieldTouched(name, true, false);
  };

  return (
    <RadioButtonContainer onClick={handleCheck}>
      <HiddenCheckBox
        name={name}
        checked={formik.values[name]}
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
