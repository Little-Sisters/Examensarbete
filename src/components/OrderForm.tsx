import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../contexts/OrderContext';
import styled from 'styled-components';
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
      }}
      validationSchema={customerSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <StyledForm onSubmit={formik.handleSubmit}>
          <FlexContainer>
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
                <RadioButton text="I accept the terms and conditions" />
                <FlexRow>
                  <StyledButton>Shop more</StyledButton>
                  <StyledButton type="submit">Place Order</StyledButton>
                </FlexRow>
              </FlexContainer>
            </div>
          </FlexContainer>
        </StyledForm>
        // </form>
      )}
    </Formik>
  );
}

const StyledForm = styled.form`
  margin: auto;
  background: transparent;
  margin-top: 1rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const StyledButton = styled.button`
  margin: auto;
  border: none;
`;

const StyledText = styled.p`
  color: red;
  font-size: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
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
