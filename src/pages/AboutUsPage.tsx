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
          <TeamDescription>
            <h3>Our team</h3>
            <hr />
          </TeamDescription>
          <Team>
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eligendi modi dicta enim asperiores aliquid atque, adipisci rem
                minus, numquam nostrum. Magnam, fugiat! Aut voluptas tempora
                vel, quisquam veritatis sequi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae eligendi modi dicta enim
                asperiores aliquid atque, adipisci rem minus, numquam nostrum.
                Magnam, fugiat! Aut voluptas tempora vel, quisquam veritatis
                sequi.
              </span>
            </div>
            <TeamImagesContainer>
              <TeamImage src="/assets/person.jpg" alt="" />
              <TeamImage src="/assets/person.jpg" alt="" />
              <TeamImage src="/assets/person.jpg" alt="Image 3" />
            </TeamImagesContainer>
            <BigFlower src="/assets/bigflower.png" alt="" />
          </Team>
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
  background: ${({ theme }) => theme.purple};
`;

const Team = styled.div`
  padding: 2rem;
  display: flex;

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

const TeamImagesContainer = styled.div`
  img:nth-child(2) {
    align-self: flex;
    border: 2px solid red;
  }
`;

const TeamImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem;
  width: 30%;
`;

const TeamDescription = styled.div`
  padding: 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export default AboutUsPage;
