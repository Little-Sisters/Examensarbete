import { Field, Formik } from 'formik';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import { toast } from 'react-toastify';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Footer from '../components/Footer';

interface StyledFormControlProps {
  error?: boolean | string;
}

const bespokeSchema = Yup.object({
  email: Yup.string().email('invalid email').required('Email required'),
  personalizedRequest: Yup.string()
    .required('Personalized request required')
    .min(10, 'Personalized request is too short'),
});

function BespokeDetailsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_emailAddress, setEmailAddress] = useState<string>('');
  const [colorPicker, setColorPicker] = useState<string>('#ffffff');
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<string | undefined>();
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);

  useScrollToTop();

  // Sets the page title
  useEffect(() => {
    document.title = 'Bespoke Cake';
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const toggleColorPicker = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setIsColorPickerVisible((prevState) => !prevState);
  };

  const openImage = () => {
    window.open(file);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node) &&
        !event.defaultPrevented
      ) {
        setIsColorPickerVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [colorPickerRef]);

  return (
    <div>
      <MarginTopContainer>
        <PageContentWrapper>
          <ProductLayout>
            <Cake>
              <img src="/transparent-cake.png" alt="" />
            </Cake>
            <InputContainer>
              <InputFlexWrapper>
                <SelectAndInformation>
                  <Information>
                    <h1>Bespoke Cake</h1>
                    <p>Product description</p>
                    <p>Price</p>
                  </Information>
                  <Selections>
                    <label>Image</label>
                    <FlexContainer>
                      <ImageUploaderContainer>
                        <input type="file" onChange={handleChange} />
                        {file && (
                          <UploadedImage
                            src={file}
                            alt="Selected File"
                            onClick={openImage}
                          />
                        )}
                      </ImageUploaderContainer>
                    </FlexContainer>
                    <label>Colour</label>
                    <FlexContainer>
                      <ColorPickerContainer>
                        <ColorPickerInput
                          readOnly
                          onClick={toggleColorPicker}
                          placeholder="Select a color..."
                        />
                        <ColorPickerPreview
                          onClick={toggleColorPicker}
                          style={{ backgroundColor: colorPicker }}
                        ></ColorPickerPreview>
                        {isColorPickerVisible && (
                          <ColorPicker ref={colorPickerRef}>
                            <SketchPicker
                              color={colorPicker}
                              onChange={(newColor: ColorResult) =>
                                setColorPicker(newColor.hex)
                              }
                            />
                          </ColorPicker>
                        )}
                      </ColorPickerContainer>
                    </FlexContainer>
                    <Formik
                      initialValues={{
                        email: '',
                        personalizedRequest: '',
                      }}
                      validationSchema={bespokeSchema}
                      onSubmit={(_values, { resetForm }) => {
                        setEmailAddress('');
                        setColorPicker('#ffffff');
                        setFile(undefined);
                        resetForm();
                        toast.success('Request successfully sent');
                      }}
                    >
                      {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                          <StyledFormControl
                            error={
                              !!(formik.touched.email && formik.errors.email) ||
                              !!(
                                formik.touched.personalizedRequest &&
                                formik.errors.personalizedRequest
                              )
                            }
                          >
                            <label htmlFor="email">
                              Email<Required>*</Required>
                            </label>
                            {formik.touched.email && formik.errors.email ? (
                              <p>{formik.errors.email}</p>
                            ) : null}
                            <input
                              id="email"
                              placeholder="Your email address..."
                              name="email"
                              type="email"
                              autoComplete="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                            <label htmlFor="personalizedRequest">
                              Request<Required>*</Required>
                            </label>

                            {formik.touched.personalizedRequest &&
                              formik.errors.personalizedRequest && (
                                <p>{formik.errors.personalizedRequest}</p>
                              )}
                            <Field
                              as={RequestInput}
                              placeholder="Your personalized request..."
                              id="personalizedRequest"
                              name="personalizedRequest"
                              autoComplete="off"
                            />
                          </StyledFormControl>
                          <button type="submit">Send request</button>
                        </form>
                      )}
                    </Formik>
                  </Selections>
                </SelectAndInformation>
              </InputFlexWrapper>
            </InputContainer>
          </ProductLayout>
          <ShortCutTitle>Want to know more?</ShortCutTitle>
          <FlexContainer>
            <ShortCuts>
              <LinkWrapper to={`/flavors`}>
                <img src="/assets/flavors.jpg" alt="" />
                <h3>Flavors</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  quae quasi rerum, nam voluptates{' '}
                </span>
              </LinkWrapper>
              <LinkWrapper to={`/gallery`}>
                <img src="/assets/aboutus.jpg" alt="" />
                <h3>Gallery</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  quae quasi rerum, nam voluptates{' '}
                </span>
              </LinkWrapper>
              <LinkWrapper to={`/about`}>
                <img src="/assets/aboutus2.jpg" alt="" />
                <h3>About</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  quae quasi rerum, nam voluptates{' '}
                </span>
              </LinkWrapper>
            </ShortCuts>
          </FlexContainer>
        </PageContentWrapper>
      </MarginTopContainer>
      <Footer />
    </div>
  );
}

const StyledFormControl = styled.div<StyledFormControlProps>`
  color: ${(props) => (props.error ? 'red' : 'black')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5;
`;

const Required = styled.span`
  color: red;
  margin-left: 0.2rem;
`;

const FlexContainer = styled.div`
  gap: 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ImageUploaderContainer = styled.div`
  width: 100%;
  position: relative;

  input {
    &:hover {
      cursor: pointer;
    }
  }
`;

const UploadedImage = styled.img`
  height: 30px;
  object-fit: contain;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  cursor: pointer;
`;

const ColorPickerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ColorPickerInput = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const ColorPicker = styled.div`
  z-index: 1000;
  position: absolute;
  right: 0.5rem;
  top: 2rem;
`;

const ColorPickerPreview = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.input};
  position: absolute;
  right: 0.5rem;
  top: 0.35rem;
  cursor: pointer;
`;

const ShortCuts = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0rem 5rem 5rem 5rem;
  }
`;

const LinkWrapper = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 3px;

    @media (max-width: 900px) {
      height: 400px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    z-index: 1;
    transition: background-color 0.3s ease;
  }

  &:hover {
    cursor: pointer;

    &::after {
      background-color: ${({ theme }) => theme.overlay};
    }
  }
`;

const RequestInput = styled.textarea`
  padding: 0.5rem;
  height: 200px;
  border-radius: 3px;
  background-color: transparent;
  transition: border-color 0.3s ease-in;
  width: 100%;
  border: 1px solid #706f6f;
  border-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border: 1px solid #857452;
    box-shadow: 0 0 0 1px #857452;
  }

  &::placeholder {
    color: #c7c7c7;
  }
`;

const SelectAndInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  input {
    width: 100%;
  }

  button {
    margin-top: 2rem;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  h1 {
    margin: 0;
  }
  p {
    margin: 0;
    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

const Selections = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cake = styled.div`
  background: ${({ theme }) => theme.card};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: 35rem;
  }

  img {
    height: 80%;
    @media (max-width: 700px) {
      width: auto;
      height: 30rem;
    }
  }
`;
const InputContainer = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const InputFlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  button {
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 0rem;
  }
  @media (max-width: 700px) {
    width: 100%;
    padding: 0rem;
  }
`;

const ShortCutTitle = styled.h2`
  text-align: center;
  margin: 4rem 0rem 3rem 0rem;
`;

const ProductLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  min-height: 85vh; /* Default height for desktop */
  height: 40rem;
  transition: background-color 0.3s ease-in;

  input {
    margin-bottom: 0.5rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid #706f6f;
    border-style: solid;
    border-color: ${({ theme }) => theme.input};

    &:focus {
      outline: none;
      border: 1px solid #857452;
      box-shadow: 0 0 0 1px #857452;
    }

    &::placeholder {
      color: #c7c7c7;
    }
  }

  @media (max-width: 1024px) {
    min-height: calc(80vh - 9rem); /* Default height for desktop */
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    min-height: auto; /* Adjust the height for smaller screens */
  }
`;

export default BespokeDetailsPage;
