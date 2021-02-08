import React from 'react';
import { connect, styled } from 'frontity';
import { Container, Row, Col } from 'react-bootstrap';
import UnderlineButton from './underline-button';

const Section = ({
    title, desc, ctaText, ctaUrl, children, bg,
}) => (
    <PageSection color={bg}>
        <Container>
            <HeadingRow className="align-items-center" haschildren={children ? 'true' : 'false'}>
                <Col lg={5}>
                    <h2>{title}</h2>
                    <UnderlineButton dest={ctaUrl} title={ctaText} />
                </Col>
                <Col lg={7}>
                    <p>{desc}</p>
                </Col>
            </HeadingRow>
            {children}
        </Container>
    </PageSection>
);

const PageSection = styled.section`
    background-color: ${(props) => props.color || '#e5e2dd'};
    padding: 3rem 0 3rem 0;
`;

const HeadingRow = styled(Row)`
    padding-bottom: ${(props) => (props.haschildren === 'true' ? '3rem' : '0')}
`;

export default connect(Section);
