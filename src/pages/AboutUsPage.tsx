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
      <Hero
        src="/assets/weddingtable.jpeg"
        alt="Decorated wedding table from bird's eye view"
      />

      <PageContentWrapper>
        <FlexContainer>
          <QuoteContainer>
            <img src="/assets/smallflowers.png" alt="" />
            <Gradient></Gradient>
            <h4>
              "Every cake we create is a labor of love because we understand
              that behind each slice, there's a piece of your most cherished
              moments"
            </h4>
            <span>- Name, Role</span>
          </QuoteContainer>
        </FlexContainer>
        <FlexContainer>
          <OurVisionContainer>
            <img src="/assets/weddingcake2.jpg" alt="" />
            <div>
              <div>
                <h1>Our vision</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur quo, deserunt molestias veritatis quam, voluptatum,
                architecto vitae aliquid magnam omnis mollitia culpa! Illo, non
                enim repellendus mollitia voluptatibus ullam at? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Consectetur quo,
                deserunt molestias veritatis quam, voluptatum, architecto vitae
                aliquid magnam omnis mollitia culpa! Illo, non enim repellendus
                mollitia voluptatibus ullam at?
              </p>
            </div>
          </OurVisionContainer>
        </FlexContainer>
      </PageContentWrapper>
      <PurpleContainer>
        <PageContentWrapper>
          <TeamWrapper>
            <TeamDescription>
              <h1>Our team</h1>
            </TeamDescription>
            <Team>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eligendi modi dicta enim asperiores aliquid atque, adipisci rem
                minus, numquam nostrum. Magnam, fugiat! Aut voluptas tempora
                vel, quisquam veritatis sequi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Beatae eligendi modi dicta enim
                asperiores aliquid atque, adipisci rem minus, numquam nostrum.
                Magnam, fugiat! Aut voluptas tempora vel, quisquam veritatis
                sequi.
              </p>
              <div>
                <TeamImageWrapper>
                  <Column>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                  </Column>
                  <MarginTop>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                  </MarginTop>
                </TeamImageWrapper>
              </div>
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

  h1 {
    margin: 0;
    padding: 0 0 2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }
`;

const Hero = styled.img`
  width: 100%;
  object-fit: cover;
  height: 75vh;
`;

// Quote section //////////////////////////////////////////////////////////
const QuoteContainer = styled.div`
  width: 50%;
  padding: 1rem;
  border-radius: 50rem;

  h4 {
    font-style: italic;
    font-size: 1.9rem;
    line-height: 1.5;
    font-family: 'Ephesis', sans-serif;
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
    margin-left: 2rem;
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

// Our vision  //////////////////////////////////////////////////////////
const OurVisionContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    object-fit: cover;
    border-radius: 5px;
    margin: 0rem 6rem 0rem 0rem;
  }

  div {
    text-align: left;
    align-items: center;
  }
`;

// Team section //////////////////////////////////////////////////////////
const PurpleContainer = styled.div`
  background: ${({ theme }) => theme.purple};
`;

const Team = styled.div`
  padding: 2rem 0rem 2rem 2rem;
  display: flex;
  gap: 5rem;

  img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const TeamWrapper = styled.div`
  position: relative;
  width: 80%;
`;

const TeamImageWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const MarginTop = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TeamDescription = styled.div`
  margin-left: 2rem;
  padding: 2rem 0rem 0rem 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const BigFlower = styled.img`
  position: absolute;
  right: 20px;
  width: 13%;
  top: 10%;
`;

const TeamMemberDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export default AboutUsPage;
