import { useEffect } from 'react';
import styled from 'styled-components';
import MarginTopContainer from '../components/reusable components/MarginTopContainer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';

function AboutUsPage() {
  useEffect(() => {
    document.title = 'About';
  }, []);

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
            <Gradient></Gradient>
            <h4>
              "Every cake we create is a labor of love because we understand
              that behind each slice, there's a piece of your most cherished
              moments"
            </h4>
            <span>- Name, Role</span>
          </Quote>
        </FlexContainer>
        <FlexContainer>
          <WeddingCakeWrapper>
            <img src="/assets/aboutweddingcake.jpg" alt="" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quo, deserunt molestias veritatis quam, voluptatum,
              architecto vitae aliquid magnam omnis mollitia culpa! Illo, non
              enim repellendus mollitia voluptatibus ullam at? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consectetur quo, deserunt
              molestias veritatis quam, voluptatum, architecto vitae aliquid
              magnam omnis mollitia culpa! Illo, non enim repellendus mollitia
              voluptatibus ullam at?
            </span>
          </WeddingCakeWrapper>
        </FlexContainer>
      </PageContentWrapper>
      <PurpleContainer>
        <PageContentWrapper>
          <TeamWrapper>
            <TeamDescription>
              <h3>Our team</h3>
            </TeamDescription>
            <Team>
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
              <TeamImagesContainer>
                <FirstContainer>
                  <img src="/assets/person.jpg" alt="" />
                  <img src="/assets/person.jpg" alt="" />
                </FirstContainer>
                <SecondContainer>
                  <img src="/assets/person.jpg" alt="" />
                </SecondContainer>
              </TeamImagesContainer>
            </Team>
          </TeamWrapper>
          <BigFlower src="/assets/bigflower.png" alt="" />
        </PageContentWrapper>
      </PurpleContainer>
    </>
  );
}

// General
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 4rem 0rem 4rem 0rem;
`;

const SegwayImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 65vh;
`;

// Quote section //////////////////////////////////////////////////////////
const Quote = styled.div`
  width: 50%;
  padding: 1rem;
  border-radius: 50rem;

  h4 {
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  img {
    width: 13%;
    object-fit: cover;
    position: absolute;
    left: 11%;
    top: 4%;
  }

  span {
    text-align: left;
    display: block;
    font-size: 1rem;
    font-family: 'Lora', sans-serif;
    margin-left: 1rem;
    color: ${({ theme }) => theme.grey};
  }
`;

const Gradient = styled.div`
  background: radial-gradient(
    ellipse at center,
    ${({ theme }) => theme.purple},
    rgba(0, 0, 0, 0) 60%
  );
  border-radius: 50rem;
  position: absolute;
  width: 100rem;
  height: 20rem;
  object-fit: cover;
  z-index: -1;
  top: 11%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Wedding cake section //////////////////////////////////////////////////////////
const WeddingCakeWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    object-fit: cover;
    border-radius: 5px;
    padding: 0rem 6rem 0rem 0rem;
  }

  span {
    font-size: 1rem;
    font-family: 'Lora', sans-serif;
    text-align: left;
  }
`;

// Team section //////////////////////////////////////////////////////////
const PurpleContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.purple};
`;

const Team = styled.div`
  padding: 2rem 0rem 2rem 2rem;
  display: flex;
`;

const BigFlower = styled.img`
  position: absolute;
  right: 20px;
  width: 13%;
  top: 0;
`;

const TeamDescription = styled.div`
  margin-left: 2rem;
  padding: 2rem 0rem 2rem 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const TeamImagesContainer = styled.div`
  grid-template-columns: 195px 50px 160px;
  display: grid;

  img {
    width: 60%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const TeamWrapper = styled.div`
  position: relative;
  width: 80%;
`;

const FirstContainer = styled.div``;

const SecondContainer = styled.div`
  margin-top: 70px;
`;

export default AboutUsPage;
