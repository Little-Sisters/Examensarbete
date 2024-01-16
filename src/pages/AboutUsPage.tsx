import styled from 'styled-components';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';

function AboutUsPage() {
  return (
    <>
      <PageContentWrapper>
        <MarginTopContainer>
          <PageDescription
            title="About us"
            description="Hej Description Lorem ipsum dolor sit amet consectetur adipisicing
elit. Amet et neque obcaecati placeat cum ab id quam provident
maiores quaerat, dicta incidunt recusandae minus quod quae in libero
quia enim!"
          />
        </MarginTopContainer>
      </PageContentWrapper>
      <SegwayImage src="/assets/weddingtable.jpeg" alt="" />

      <PageContentWrapper>
        <FlexContainer>
          <Quote>
            <img src="/assets/smallflowers.png" alt="" />
            <h4>
              "Every cake we create is a labor of love because we understand
              that behind each slice, there's a piece of your most cherished
              moments"
            </h4>
            <span>- Name, Role</span>
          </Quote>
        </FlexContainer>
        <FlexContainer>
          <WeddingCake src="/assets/aboutweddingcake.jpg" alt="" />
          <span>
            "Every cake we create is a labor of love because we understand that
            behind each slice, there's a piece of your most cherished moments"
          </span>
        </FlexContainer>
      </PageContentWrapper>
      <PurpleContainer>
        <PageContentWrapper>
          <FlexContainer>
            <Team>
              <h3>Our team</h3>
              <hr />
              <span>
                "Every cake we create is a labor of love because we understand
                that behind each slice, there's a piece of your most cherished
                moments"
              </span>
              <TeamImage src="/assets/person.jpg" alt="" />
              <TeamImage src="/assets/person.jpg" alt="" />
              <TeamImage src="/assets/person.jpg" alt="" />
              <BigFlower src="/assets/bigflower.png" alt="" />
            </Team>
          </FlexContainer>
        </PageContentWrapper>
      </PurpleContainer>
    </>
  );
}

const SegwayImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Quote = styled.div`
  background: radial-gradient(
    ellipse at center,
    ${({ theme }) => theme.purple},
    rgba(0, 0, 0, 0) 70%
  );
  width: 50%;
  padding: 3rem;
  border-radius: 50rem;

  h4 {
    font-family: 'Ephesis', cursive;
    font-style: italic;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  img {
    width: 13%;
    object-fit: cover;
    position: absolute;
    left: 13%;
  }

  span {
    display: block;
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Lora', sans-serif;
  }
`;

const WeddingCake = styled.img`
  width: 60%;
  object-fit: cover;
  border-radius: 5px;
`;

const PurpleContainer = styled.div`
  width: 100%;
  height: 500px;
  background: ${({ theme }) => theme.purple};
`;

const Team = styled.div`
  padding: 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  hr {
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    margin-bottom: 1rem;
  }
`;

const BigFlower = styled.img`
  position: absolute;
  right: 0;
  width: 15%;
  top: 0;
`;

const TeamImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem;
  width: 20%;
`;

export default AboutUsPage;
