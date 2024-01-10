import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

interface BespokeDetailsPageProps {}

function BespokeDetailsPage({}: BespokeDetailsPageProps) {
  const [colorPicker, setColorPicker] = useState<string>('#ffffff');
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);

  const toggleColorPicker = () => {
    setIsColorPickerVisible((prevState) => !prevState);
  };

  const sendRequest = () => {
    console.log('Sending request...');
  };

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <FlexContainer>
          <FlexBox>
            <Column>
              <h1>BESPOKE</h1>
              <p>Information block</p>
            </Column>
            <Column>
              <label>Colour</label>
              <FlexContainer>
                <InputSelect>
                  <label>Select a colour...</label>
                  <ColorPickerPreview
                    onClick={toggleColorPicker}
                    style={{ backgroundColor: colorPicker }}
                  ></ColorPickerPreview>
                  {isColorPickerVisible && (
                    <ColorPickerContainer>
                      <SketchPicker
                        color={colorPicker}
                        onChange={(newColor: ColorResult) =>
                          setColorPicker(newColor.hex)
                        }
                      />
                    </ColorPickerContainer>
                  )}
                </InputSelect>
              </FlexContainer>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                facilis deserunt maiores aspernatur magni placeat cupiditate
              </p>
              <label>Request</label>
              <FlexContainer>
                <input type="text" placeholder="Your personalized request..." />
              </FlexContainer>
              <button onClick={sendRequest}>Send request</button>
            </Column>
          </FlexBox>
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexBox = styled.div`
  display: flex;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 1rem;
  width: 50%;
`;

const InputSelect = styled.div`
  transition: 'all 0.30s linear';
  border-radius: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 3px;
  color: gray;
  width: 100%;
`;

const ColorPickerContainer = styled.div`
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
  border: 1px solid gray;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Set the width to 100% to occupy the entire space */

  label {
    display: block;
  }

  p {
    display: block;
  }

  input {
    height: 100px;
    width: 100%;
    border: 1px solid black;
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

export default BespokeDetailsPage;
