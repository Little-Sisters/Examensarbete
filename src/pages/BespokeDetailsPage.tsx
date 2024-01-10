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
              <FlexContainer>
                <h3>Select a color</h3>
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
                <ColorPickerPreview
                  onClick={toggleColorPicker}
                  style={{ backgroundColor: colorPicker }}
                ></ColorPickerPreview>
              </FlexContainer>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                facilis deserunt maiores aspernatur magni placeat cupiditate
              </p>
              <FlexContainer>
                <input type="text" />
              </FlexContainer>
              <button>Send request</button>
            </Column>
          </FlexBox>
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexBox = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex-direction: column;
  margin: 1rem;
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
  border: 1px solid black;
  cursor: pointer;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: block;
  }

  input {
    height: 100px;
    width: 100%;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    float: right;
  }
`;

export default BespokeDetailsPage;
