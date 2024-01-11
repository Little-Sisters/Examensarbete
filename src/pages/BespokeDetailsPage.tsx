import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

interface BespokeDetailsPageProps {}

function BespokeDetailsPage({}: BespokeDetailsPageProps) {
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
    console.log('Sending request...');
  };

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <FlexContainer>
          <Column>
            <img src="/cake1.jpg" alt="placeholder" />
          </Column>
          <Column>
            <h1>Bespoke Cake</h1>
            <p>Product description</p>
            <p>
              Service fee $50
              <br />
              Price discussed during consultation
            </p>
            <label>Colour</label>
            <FlexContainer>
              <ColorPickerInput
                onClick={toggleColorPicker}
                onBlur={closeColorPicker}
                // Makes it so that the user can close the color picker by clicking outside of it
                tabIndex={0}
                style={{
                  border: isColorPickerActive
                    ? '2px solid #000000'
                    : '1px solid #706f6f',
                }}
              >
                <label>Select a colour...</label>
                {/* Color picker preview box */}
                <ColorPickerPreview
                  style={{ backgroundColor: colorPicker }}
                ></ColorPickerPreview>
                {/* Color picker / Sketch picker wrapper
                if statement for toggle */}
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
              </ColorPickerInput>
            </FlexContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              facilis deserunt maiores aspernatur magni placeat cupiditate
            </p>
            <label>Request</label>
            <input type="text" placeholder="Your email address" />
            <FlexContainer>
              <RequestInput
                type="text"
                placeholder="Your personalized request..."
              />
            </FlexContainer>
            {/*  */}
            <button onClick={sendRequest}>Send request</button>
          </Column>
        </FlexContainer>
        <p>Container for more content</p>
        <FlexContainer>
          <ShortCuts>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>Hej</p>
              <button>Test</button>
            </Shortcut>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>Hej</p>
              <button>Test</button>
            </Shortcut>
            <Shortcut>
              <img src="/cake1.jpg" alt="" />
              <p>Hej</p>
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
    width: 100%;
    height: 200px;
  }
`;

const ColorPickerInput = styled.div`
  transition: 'all 0.30s linear';
  border-radius: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #706f6f;
  padding: 0.4rem;
  border-radius: 3px;
  color: gray;
  width: 100%;
  transition: all 0.3s linear;

  &:hover {
    cursor: pointer;
  }
`;

const ColorPicker = styled.div`
  margin-top: 20px;
  z-index: 1000;
  position: absolute;
  top: 50px;
`;

const ColorPickerPreview = styled.div`
  width: 60px;
  height: 25px;
  border-radius: 3px;
  margin-left: 10px;
  border: 1px solid #706f6f;
  cursor: pointer;
`;

const RequestInput = styled.input`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  border-radius: 3px;
  color: gray;
`;

export default BespokeDetailsPage;
