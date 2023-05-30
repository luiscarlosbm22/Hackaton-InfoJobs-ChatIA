
import styled from "@emotion/styled"
const ModalContent1 = () => {

    const LoaderContainer = styled.div`
  --col1: rgba(228, 19, 141, 0.925);
  --col2: rgb(255, 179, 80);
  font-size: 2em;
  font-weight: 600;
  perspective: 800px;
  position: relative;

  &::after,
  &::before,
  .text::after,
  .text::before {
    perspective: 800px;
    animation: anim 2s ease-in-out infinite, dotMove 10s ease-out alternate infinite, move 10s linear infinite 1s;
    content: '●';
    color: var(--col1);
    position: absolute;
    translate: -60px 500px;
    width: 5px;
    height: 5px;
  }

  &::before {
    animation-delay: 3s;
    color: var(--col1);
  }

  .text::before {
    color: var(--col2);
    animation-delay: 2s;
  }

  .text::after {
    color: var(--col2);
  }

  .text {
    animation: anim 20s linear infinite, move 10s linear infinite 1s;
    color: transparent;
    background-image: linear-gradient(90deg, var(--col1) 0%, var(--col2) 100%);
    background-clip: text;
    background-size: 100%;
    background-repeat: no-repeat;
    transform: skew(5deg, -5deg);
    -webkit-background-clip: text;
    position: relative;
  }

  @keyframes anim {
    0%, 100% {
      text-shadow: 2px 0px 2px rgba(179, 158, 158, .5);
    }

    50% {
      background-size: 0%;
      background-position-x: left;
      text-shadow: 2px 10px 6px rgba(179, 158, 158, 1);
    }
  }

  @keyframes move {
    50% {
      translate: 0px 0px;
      rotate: x 60deg;
      transform: skew(-5deg, 5deg);
    }
  }

  @keyframes dotMove {
    0%, 100% {
      translate: -60px 300px;
    }

    50% {
      translate: 160px -250px;
      scale: .5;
      opacity: .85;
    }
  }
`;

    return (
        <LoaderContainer>
            <p className="text">
                Creando CV...
            </p>
        </LoaderContainer>
    )
}

export default ModalContent1