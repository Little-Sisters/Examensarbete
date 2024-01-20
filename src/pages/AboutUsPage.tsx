import { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import PageContentWrapper from '../components/reusable components/PageContentWrapper';
import PageDescription from '../components/reusable components/PageDescription';
import { useScrollToTop } from '../hooks/useScrollToTop';

function AboutUsPage() {
  // useScrollToTop();
  useEffect(() => {
    document.title = 'About Us';
  }, []);

  return (
    <>
      <PageContentWrapper>
        <MarginTopSmall>
          <PageDescription
            title="About Love Story Cakes"
            description="Love Story Cakes was founded in 2024 by a group of friends who
            wanted to share their love of baking with the world. Their mission
            was to empower people to use their creativity to visualize and
            create their dream wedding cake."
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
            <span>- Mimie, CEO</span>
          </QuoteContainer>
        </FlexContainer>
        <FlexContainer>
          <OurVisionContainer>
            <img src="/assets/weddingcake2.jpg" alt="" />
            <div>
              <h2>Our Vision</h2>
              <p>
              A wedding is special. For many, it is the most significant day of our lives. The wedding is a celebration of love and dreams. Dreams are unique, and we all have our own dreams and visions. 
              </p>
              <p>This is what we want to convey with our wedding cakes. They are more than just pastries; they are a symbol of your love and your new future. We understand that a wedding cake is so personal that it cannot be purchased off the shelf. We are here to give you the wedding cake of your dreams.</p>
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
                  <h2>Our Team</h2>
                </TeamDescription>
                <p>
                  Our team is a vibrant collective of passionate pastry chefs and cake decorators who have studied at some of the most prestigious culinary schools in the world. We are united by our love of baking and our desire to create beautiful and delicious cakes for our customers. 
                </p>
                <p>
                We believe that a cake is more than just a dessert; it's a centerpiece that captures the essence of celebration and joy. Our team works closely with customers to transform their visions into reality, ensuring that each cake is a bespoke masterpiece that perfectly suits their special occasion. From the delicate balance of flavors to the intricate details in design, every cake we create is a testament to our expertise and creativity.
                </p>
              </StyledText>
              <TeamImageWrapper>
                <Column>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Mimie F.</span>
                      <span>Founder - CEO</span>
                    </TeamMemberDesc>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Kaysa S.</span>
                      <span>Founder - Head Pastry Chef</span>
                    </TeamMemberDesc>
                  </ProfileWrapper>
                </Column>
                <MarginTop>
                  <ProfileWrapper>
                    <img src="/assets/person.jpg" alt="" />
                    <TeamMemberDesc>
                      <span>Felicity L.</span>
                      <span>Founder - CFO</span>
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
  margin-top: 6rem; // Center the content

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
    width: 60%;
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
      font-size: 1.3rem;
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
      left: 5%;
      top: 5%;
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
    ${({ theme }) => theme.strongPurple},
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
  font-size: 18px;
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
  width: 30%;
  gap: 1rem;

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
  margin-top: 9rem;
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
  width: 10%;
  top: 2%;

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
