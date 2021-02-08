import React, { useEffect } from 'react';
import { connect } from 'frontity';
import { Col, Row } from 'react-bootstrap';
import ProjectSnippet from './project-snippet';

const ProjectList = ({ state, actions }) => {
    useEffect(() => {
        actions.source.fetch('/project');
    }, []);

    const data = state.source.get('/project');

    if (data.isArchive) {
        const posts = data.items.map(({ type, id }) => state.source[type][id]);

        return (
            <>
                <Row className="pb-4">
                    {posts.map((project) => (
                        <Col lg={4} md={6} key={project.title.rendered}>
                            <ProjectSnippet project={project} />
                        </Col>
                    ))}
                </Row>
            </>
        );
    }

    return null;
};

export default connect(ProjectList);
