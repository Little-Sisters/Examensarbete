import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../contexts/OrderContext';
import styled from 'styled-components';

interface StyledFormControlProps {
  error?: boolean | string;
}

const phoneRegExp = /^[0-9]{10}$/;

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

  const handleSubmit = async (
    values: Customer,
    actions: FormikHelpers<Customer>,
  ) => {
    console.log("handleSubmit called")
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
      console.log('Customer data:', customer); 
      const order = createOrder(customer);
      console.log('created order:', order);
      actions.resetForm();
      console.log("navigating to confirmation")
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
        // <form onSubmit={(e) => {
        //     e.preventDefault();
        //     formik.handleSubmit(e);
        //   }}>          
          <StyledForm onSubmit={formik.handleSubmit}>
            <FlexContainer>
              <FlexContainer>
                <h4>Contact Details</h4>
              </FlexContainer>
              <div>
                <FlexContainer>
                  <StyledFormControl>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      autoComplete="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    ></StyledInput>
                    {formik.touched.name && formik.errors.name ? (
                      <StyledText>{formik.errors.name}</StyledText>
                    ) : null}
                  </StyledFormControl>
                  <StyledFormControl
                    error={!!(formik.touched.email && formik.errors.email)}
                  >
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    ></StyledInput>
                    {formik.touched.email && formik.errors.email ? (
                      <StyledText>{formik.errors.email}</StyledText>
                    ) : null}
                  </StyledFormControl>

                  <StyledFormControl
                    error={!!(formik.touched.phone && formik.errors.phone)}
                  >
                    <StyledLabel htmlFor="phone">Phone nr.</StyledLabel>
                    <StyledInput
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone nr."
                      autoComplete="tel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    ></StyledInput>
                    {formik.touched.phone && formik.errors.phone ? (
                      <StyledText>{formik.errors.phone}</StyledText>
                    ) : null}
                  </StyledFormControl>

                  <StyledFormControl
                    error={!!(formik.touched.street && formik.errors.street)}
                  >
                    <StyledLabel htmlFor="street">Street</StyledLabel>
                    <StyledInput
                      id="street"
                      name="street"
                      type="text"
                      placeholder="Street"
                      autoComplete="street-address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.street}
                    ></StyledInput>
                    {formik.touched.street && formik.errors.street ? (
                      <StyledText>{formik.errors.street}</StyledText>
                    ) : null}
                  </StyledFormControl>

                  <StyledFormControl
                    error={!!(formik.touched.zipCode && formik.errors.zipCode)}
                  >
                    <StyledLabel htmlFor="zipCode">Zip Code</StyledLabel>
                    <StyledInput
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      placeholder="Zip Code"
                      autoComplete="postal-code"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.zipCode}
                    ></StyledInput>
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <StyledText>{formik.errors.zipCode}</StyledText>
                    ) : null}
                  </StyledFormControl>

                  <StyledFormControl
                    error={!!(formik.touched.city && formik.errors.city)}
                  >
                    <StyledLabel htmlFor="city">City</StyledLabel>
                    <StyledInput
                      id="city"
                      name="city"
                      type="text"
                      placeholder="city"
                      autoComplete="address-level2"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    ></StyledInput>
                    {formik.touched.city && formik.errors.city ? (
                      <StyledText>{formik.errors.city}</StyledText>
                    ) : null}
                  </StyledFormControl>

                  <FlexContainer>
                    <StyledButton type="submit">Place Order</StyledButton>
                  </FlexContainer>
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
  background: white;
  margin-top: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledFormControl = styled.div<StyledFormControlProps>`
  color: ${(props) => (props.error ? 'red' : 'black')};
`;

const StyledInput = styled.input`
  border: 1px solid black;
`;

const StyledLabel = styled.label`
  margin: 0.5rem;
`;

const StyledButton = styled.button`
  width: 14rem;
  height: 4rem;
  margin: auto;
  background-color: lightGreenButton;
  color: black;
  border: none;
`;

const StyledText = styled.p``;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
