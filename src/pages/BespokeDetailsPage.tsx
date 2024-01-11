import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

interface BespokeDetailsPageProps {}

function BespokeDetailsPage({}: BespokeDetailsPageProps) {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [personalizedRequest, setPersonalizedRequest] = useState<string>('');

  // Default value for color picker
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
        <FlexContainer>
          {/******************LEFT COLUMN*************************/}
          <Column>
            <img src="/cake1.jpg" alt="placeholder" />
          </Column>

          {/******************RIGHT COLUMN*************************/}
          <Column>
            <h1>Bespoke Cake</h1>
            <p>Product description</p>
            <p>
              Service fee $50
              <br />
              Price discussed during consultation
            </p>

            {/******************COLOR SELECTOR*************************/}
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

            {/******************REQUEST*************************/}
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
            <button onClick={sendRequest}>Send request</button>
          </Column>
        </FlexContainer>

        {/******************RECOMMENDED CONTENT*************************/}
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

  label {
    display: block;
  }

  p {
    display: block;
    margin-bottom: 1.5rem;
  }

  input {
    margin-bottom: 0.5rem;
    width: 100%;
    border: 1px solid #706f6f;
    padding: 0.5rem;
    border-radius: 3px;
    color: gray;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    float: right;
    width: 100%;
  }
`;

const Column = styled.div`
  flex: 1;
  flex-direction: column;
  width: 50%;

  img {
    width: 100%;
    height: 500px;
  }
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
  border: 1px solid #706f6f;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  top: 0.35rem;
`;

const ShortCuts = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const Shortcut = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  flex-direction: column;

  img {
    height: 200px;
    object-fit: cover;
  }
`;

const RequestInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: transparent;
  color: gray;
`;

export default BespokeDetailsPage;
