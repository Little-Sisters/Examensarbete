import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useOrder } from '../contexts/OrderContext';
import RadioButton from './RadioButton';

interface StyledFormControlProps {
  error?: boolean | string;
}

const phoneRegExp = /^[0-9]{10}$/;

// Validation schema for customer information
const customerSchema = Yup.object({
  name: Yup.string()
    .required('First name required')
    .min(2, 'First name is too short'),
  email: Yup.string().email('invalid email').required('email required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  street: Yup.string()
    .required('Street required')
    .min(2, 'Street is too short'),
  zipCode: Yup.string()
    .required('Zip code is required')
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Invalid zip code'),
  city: Yup.string().required('City required').min(2, 'City is too short'),
  termsAccepted: Yup.boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),
});

export type Customer = Yup.InferType<typeof customerSchema>;

export function OrderForm() {
  const navigate = useNavigate();

  const { createOrder } = useOrder();

  // form values are validated against the customerSchema
  // if validation passes, customer data is extracted from form values
  // and an order is created
  // the form is reset
  // the user is navigated to the confirmation page
  const handleSubmit = async (
    values: Customer,
    actions: FormikHelpers<Customer>,
  ) => {
    console.log('handleSubmit called');
    try {
      await customerSchema.validate(values);
      const customer = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        street: values.street,
        zipCode: values.zipCode,
        city: values.city,
        termsAccepted: values.termsAccepted,
      };
      const order = createOrder(customer);
      console.log('created order:', order);
      actions.resetForm();
      navigate('/confirmation');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        street: '',
        zipCode: '',
        city: '',
        termsAccepted: false,
      }}
      validationSchema={customerSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <p>
            Hello! We will create your cake and deliver on your prefered date.
            Please tell us more below.
          </p>
          <div>
            <FlexContainer>
              <StyledFormControl>
                <StyledLabel>
                  Name<Required>*</Required>
                </StyledLabel>
                {formik.touched.name && formik.errors.name ? (
                  <StyledText>{formik.errors.name}</StyledText>
                ) : null}
                <StyledInput
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                ></StyledInput>
              </StyledFormControl>
              <StyledFormControl
                error={!!(formik.touched.email && formik.errors.email)}
              >
                <StyledLabel htmlFor="email">
                  Email<Required>*</Required>
                </StyledLabel>
                {formik.touched.email && formik.errors.email ? (
                  <StyledText>{formik.errors.email}</StyledText>
                ) : null}
                <StyledInput
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                ></StyledInput>
              </StyledFormControl>

              <StyledFormControl
                error={!!(formik.touched.phone && formik.errors.phone)}
              >
                <StyledLabel htmlFor="phone">
                  Phone nr.<Required>*</Required>
                </StyledLabel>
                {formik.touched.phone && formik.errors.phone ? (
                  <StyledText>{formik.errors.phone}</StyledText>
                ) : null}
                <StyledInput
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                ></StyledInput>
              </StyledFormControl>

              <StyledFormControl
                error={!!(formik.touched.street && formik.errors.street)}
              >
                <StyledLabel htmlFor="street">
                  Street<Required>*</Required>
                </StyledLabel>
                {formik.touched.street && formik.errors.street ? (
                  <StyledText>{formik.errors.street}</StyledText>
                ) : null}
                <StyledInput
                  id="street"
                  name="street"
                  type="text"
                  autoComplete="street-address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                ></StyledInput>
              </StyledFormControl>

              <StyledFormControl
                error={!!(formik.touched.zipCode && formik.errors.zipCode)}
              >
                <StyledLabel htmlFor="zipCode">
                  Zip Code<Required>*</Required>
                </StyledLabel>
                {formik.touched.zipCode && formik.errors.zipCode ? (
                  <StyledText>{formik.errors.zipCode}</StyledText>
                ) : null}
                <StyledInput
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  autoComplete="postal-code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zipCode}
                ></StyledInput>
              </StyledFormControl>

              <StyledFormControl
                error={!!(formik.touched.city && formik.errors.city)}
              >
                <StyledLabel htmlFor="city">
                  City<Required>*</Required>
                </StyledLabel>
                {formik.touched.city && formik.errors.city ? (
                  <StyledText>{formik.errors.city}</StyledText>
                ) : null}
                <StyledInput
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                ></StyledInput>
              </StyledFormControl>
              <RadioContainer>
                <RadioButton
                  text="I accept the terms and conditions"
                  name="termsAccepted"
                  formik={formik}
                />
                <Required>*</Required>
              </RadioContainer>
              {formik.touched.termsAccepted && formik.errors.termsAccepted ? (
                <StyledText>{formik.errors.termsAccepted}</StyledText>
              ) : null}

              <FlexRow>
                <StyledButton>Shop more</StyledButton>
                <StyledButton
                  type="submit"
                  disabled={!formik.values.termsAccepted}
                >
                  Place Order
                </StyledButton>
              </FlexRow>
            </FlexContainer>
          </div>
        </StyledForm>
        // </form>
      )}
    </Formik>
  );
}

const StyledForm = styled.form`
  background: transparent;
  margin-top: 1rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

const StyledFormControl = styled.div<StyledFormControlProps>`
  color: ${(props) => (props.error ? 'red' : 'black')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  width: 100%;
  outline: none;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  width: 50%;
  transition: all 0.3 ease;
  background-color: ${({ theme }) => theme.button};
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
  &:active {
    transform: scale(0.98);
  }
`;

const StyledText = styled.p`
  color: red;
  font-size: 12px;
`;

const FlexContainer = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
`;

const Required = styled.span`
  color: red;
  margin-left: 0.2rem;
`;

const RadioContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
`;
