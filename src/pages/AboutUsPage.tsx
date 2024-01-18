import { useEffect } from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';

function AboutUsPage() {
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <>
      <PageContentWrapper>
        <MarginTopSmall>
          <PageDescription
            title="About us"
            description="Hej Description Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Amet et neque obcaecati placeat cum ab id quam provident
            maiores quaerat, dicta incidunt recusandae minus quod quae in libero
            quia enim!"
          />
        </MarginTopSmall>
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
              <h2>Our vision</h2>
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
            <Team>
              <StyledText>
                <TeamDescription>
                  <h2>Our team</h2>
                </TeamDescription>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae eligendi modi dicta enim asperiores aliquid atque,
                  adipisci rem minus, numquam nostrum. Magnam, fugiat! Aut
                  voluptas tempora vel, quisquam veritatis sequi. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Beatae eligendi
                  modi dicta enim asperiores aliquid atque, adipisci rem minus,
                  numquam nostrum. Magnam, fugiat! Aut voluptas tempora vel,
                  quisquam veritatis sequi.
                </p>
              </StyledText>
              <TeamImageWrapper>
                <Column>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                  </ProfileWrapper>
                </Column>
                <MarginTop>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Name</span>
                      <span>Role name</span>
                    </TeamMemberDesc>
                  </ProfileWrapper>
                </MarginTop>
              </TeamImageWrapper>
            </Team>
          </TeamWrapper>

          <BigFlower src="/assets/bigflower.png" alt="" />
        </PageContentWrapper>
      </PurpleContainer>
      <Footer />
    </>
  );
}

const StyledText = styled.div`
  font-size: 18px;
  width: 70%;
  @media (max-width: 1000px) {
    width: 100%;
    font-size: 16px;
  }
`;

const MarginTopSmall = styled.div`
  margin-top: 6rem; /* Center the content */

  @media (max-width: 700px) {
    margin-top: 6rem;
  }
  @media (min-width: 1500px) {
    margin-top: 8rem;
  }
`;

// General
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 3rem 0rem 3rem 0rem;

  h1 {
    padding: 0 0 2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: 0;
  }

  @media (max-width: 500px) {
    margin: 0 0 0 0;
  }
`;

const Hero = styled.img`
  width: 100%;
  object-fit: cover;
  height: 65vh;

  @media (max-width: 1000px) {
    height: auto;
  }
`;

// Quote section //////////////////////////////////////////////////////////
const QuoteContainer = styled.div`
  width: 50%;
  padding: 1rem;
  border-radius: 50rem;

  @media (max-width: 1000px) {
    width: 90%;
  }

  h4 {
    font-style: italic;
    font-size: 1.9rem;
    line-height: 1.5;
    font-family: 'Ephesis', sans-serif;
    margin: 0 0 1rem 0;

    @media (max-width: 1000px) {
      font-size: 1.7rem;
    }

    @media (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  img {
    width: 13%;
    object-fit: cover;
    position: absolute;
    left: 11%;
    top: 4%;

    @media (max-width: 1000px) {
      width: 17%;
      left: 8%;
      top: 7%;
    }
    @media (max-width: 500px) {
      width: 17%;
      left: 1%;
      top: 0.5%;
    }
  }

  span {
    text-align: left;
    display: block;
    margin-left: 2rem;
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
  width: 100%;
  height: 20rem;
  z-index: -1;
  top: 11%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1000px) {
    border-radius: 50rem;
    width: 90%;
  }
`;

// Our vision  //////////////////////////////////////////////////////////
const OurVisionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  h2 {
    margin-top: 0;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }

  img {
    width: 50%;
    object-fit: cover;
    border-radius: 5px;
    margin: 0rem 6rem 0rem 0rem;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  div {
    text-align: left;
    align-items: center;
    width: 50%;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;

// Team section //////////////////////////////////////////////////////////
const PurpleContainer = styled.div`
  background: ${({ theme }) => theme.purple};

  @media (max-width: 1000px) {
    padding-bottom: 2rem;
  }
`;

const Team = styled.div`
  padding: 2rem 0rem 2rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
    gap: 1rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;

    @media (max-width: 1000px) {
      width: 90%;
    }
  }
`;

const TeamWrapper = styled.div`
  position: relative;
  width: 80%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const TeamImageWrapper = styled.div`
  display: flex;
  /* gap: 1rem; */

  @media (max-width: 1000px) {
    gap: 0rem;
    width: 100%;
  }
  @media (max-width: 500px) {
    gap: 0rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    flex-direction: row;
  }
`;

const MarginTop = styled.div`
  /* margin-top: 10rem; */
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (max-width: 1000px) {
    margin-top: 0;
  }
`;

const TeamDescription = styled.div`
  padding: 0rem 0rem 0rem 0rem;
  border-bottom: 1px solid ${({ theme }) => theme.text};

  h2 {
    margin-top: 0;
  }

  @media (max-width: 1000px) {
    margin-left: 0rem;
    padding: 1rem 0rem 0rem 0rem;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BigFlower = styled.img`
  position: absolute;
  right: 20px;
  width: 13%;
  top: 10%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const TeamMemberDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (max-width: 1000px) {
  }
`;

export default AboutUsPage;
