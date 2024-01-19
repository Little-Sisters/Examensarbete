import React, { ReactNode } from 'react';

import styled from 'styled-components';

interface TextImageVideoProps {
  title: string;
  text: string;
  summary: string;
  imageSrc: string;
  icon: ReactNode;
  videoSrc: string;
  imageContainerHeight: string;
}

const TextImageVideo: React.FC<TextImageVideoProps> = ({
  title,
  text,
  summary,
  imageSrc,
  videoSrc,
  icon,
  imageContainerHeight,
}) => {
  return (
    <Container>
      <TextBlock>
        <h2>{title}</h2>
        <span>{text}</span>
        <div>
          {icon}
          <p>{summary}</p>
        </div>
      </TextBlock>
      <ImageContainer height={imageContainerHeight}>
        <Relative>
          <Overlay></Overlay>
          <img src={imageSrc} alt="" />
        </Relative>
      </ImageContainer>
      <VideoContainer>
        <video src={videoSrc} autoPlay loop muted></video>
      </VideoContainer>
    </Container>
  );
};

const Relative = styled.div`
  height: 100%;
  width: 100;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.3s linear;
  @media (max-width: 700px) {
    width: 100%;
    background: ${({ theme }) => theme.bodyOpacity};
  }
`;

const VideoContainer = styled.div`
  width: 25%;
  border-radius: 3px;
  height: 100%;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center right;
    @media (max-width: 700px) {
      width: 100%;
    }
    @media (max-width: 500px) {
      height: 33rem;
    }
  }
`;

interface ImageContainerProps {
  height: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  width: 25%;
  height: 100%;
  border-radius: 3px;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
  }
  img {
    width: 95%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    left: 0;
    top: 0;
    height: ${({ height }) => height};
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 34rem;
  display: flex;
  @media (max-width: 1000px) {
    height: 30rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    height: auto;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  z-index: 30;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.2rem;
  h2 {
    font-size: 4rem;
    @media (max-width: 1000px) {
      font-size: 3rem;
    }
    @media (max-width: 700px) {
      font-size: 2.5rem;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 600;
  }
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export default TextImageVideo;
