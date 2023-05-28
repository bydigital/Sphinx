import { Col, Container, Row } from 'react-bootstrap';

export const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h1>Header</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
