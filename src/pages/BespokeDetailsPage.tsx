import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

function BespokeDetailsPage() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [personalizedRequest, setPersonalizedRequest] = useState<string>('');
  const [colorPicker, setColorPicker] = useState<string>('#ffffff');

  // State for color picker toggle
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);

  const [isColorPickerActive, setIsColorPickerActive] =
    useState<boolean>(false);

  const toggleColorPicker = () => {
    setIsColorPickerVisible((prevState) => !prevState);
    setIsColorPickerActive(true);
  };

  const closeColorPicker = () => {
    setIsColorPickerVisible(false);
    setIsColorPickerActive(false);
  };

  const sendRequest = () => {
    setColorPicker('#ffffff');
    setEmailAddress('');
    setPersonalizedRequest('');
  };

  return (
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
                  <label>Colour</label>
                  <FlexContainer>
                    <ColorPickerContainer>
                      <ColorPickerInput
                        readOnly
                        onBlur={closeColorPicker}
                        onClick={toggleColorPicker}
                        tabIndex={0}
                        type="text"
                        placeholder="Select a color..."
                      />
                      <ColorPickerPreview
                        onClick={toggleColorPicker}
                        style={{ backgroundColor: colorPicker }}
                      ></ColorPickerPreview>
                      {isColorPickerVisible && (
                        <ColorPicker>
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
                  <p>Explanation of how the request works</p>
                  <label>Request</label>
                  <input
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                    type="text"
                    placeholder="Your email address"
                  />
                  <FlexContainer>
                    <RequestInput
                      value={personalizedRequest}
                      placeholder="Your personalized request..."
                      onChange={(e) => setPersonalizedRequest(e.target.value)}
                    />
                  </FlexContainer>
                </Selections>
              </SelectAndInformation>
              <button onClick={sendRequest}>Send request</button>
            </InputFlexWrapper>
          </InputContainer>
        </ProductLayout>
        <p>Container for more content</p>
        <FlexContainer>
          <ShortCuts>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>Flavors</p>
              <button>Test</button>
            </Shortcut>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>Gallery</p>
              <button>Test</button>
            </Shortcut>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>About</p>
              <button>Test</button>
            </Shortcut>
          </ShortCuts>
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexContainer = styled.div`
  gap: 4rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  top: 300px;
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
`;

const Shortcut = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  img {
    height: 200px;
    object-fit: cover;
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
