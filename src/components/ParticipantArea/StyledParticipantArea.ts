import styled from 'styled-components';

export const StyledParticipant = styled.div`
  background: url('images/cut-background.png') no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;
  }

  @media screen and (max-width: 1359px) {
    .container {
      padding-inline: 20px;
    }
  }

  #heading {
    padding-top: 80px;
  }

  #participantMain,
  #my-data,
  #run-info,
  #before-run {
    padding-top: 150px;
  }

  a,
  .map {
    transition: color 400ms;
  }

  a:hover,
  .map:hover {
    color: var(--orange);
  }
`;
