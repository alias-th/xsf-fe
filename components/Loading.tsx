import styled from "styled-components";

const StyledLoading = styled.div`
  border: 4px solid transparent;
  border-top: 4px solid var(--white-1);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <StyledLoading />;
};

export default Loading;
