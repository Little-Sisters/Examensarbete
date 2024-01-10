import { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import styled from 'styled-components';
import MarginTopContainer from '../components/MarginTopContainer';
import PageContentWrapper from '../components/PageContentWrapper';

interface BespokeDetailsPageProps {}

function BespokeDetailsPage({}: BespokeDetailsPageProps) {
  const [color, setColor] = useState<string>('#ffffff');

  return (
    <MarginTopContainer>
      <PageContentWrapper>
        <FlexContainer>
          <FlexBox>
            <h3>BESPOKE</h3>
            <ColorPickerContainer>
              <SketchPicker
                color={color}
                onChange={(newColor: ColorResult) => setColor(newColor.hex)}
              />
            </ColorPickerContainer>
          </FlexBox>
        </FlexContainer>
      </PageContentWrapper>
    </MarginTopContainer>
  );
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

const ColorPickerContainer = styled.div`
  margin-top: 20px; 
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    margin: 0;
    padding: 0;
  }
`;


export default BespokeDetailsPage;
