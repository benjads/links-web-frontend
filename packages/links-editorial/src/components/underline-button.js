import React from 'react';
import { connect, styled } from 'frontity';
import EditorialLink from './link';

const UnderlineButton = ({ dest, title }) => (
    <CTALink link={dest}>
        <CTAText>{title}</CTAText>
    </CTALink>
);

const CTALink = styled(EditorialLink)`
    :hover {
      text-decoration: none;
    }
`;

const CTAText = styled.span`
    color: black;
    text-transform: uppercase;
    max-width: fit-content;
    font-size: 0.8rem;
    display: inline-block;
  
    :after {
      transition: all ease-in-out .2s;
      background: none repeat scroll 0 0 black;
      content: "";
      display: block;
      height: 2px;
      width: 0;
    }
  
    :hover:after {
      width: 100%;
    }
`;

export default connect(UnderlineButton);
