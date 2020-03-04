import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import poolPic from "../images/poolPic.jpg"

function AboutUs() {
    return (
        <div>
            <Hero backgroundImage={poolPic}>
                <h1>New Jersey Swimming Group</h1>
                <h2></h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome To New Jersey Swimming Group</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                            Welcome to U.S. Swimming Group(USSG).
                            USSG is founded by a group of former Korean Olympic swimmers who have the experience and
                            knowledge to guide students on their path to become a competitive swimmer or a swim coach and also to
                            help more general group of students to learn and enjoy swimming.
                            Our coaches use the teaching method of both Korean and US swim teams, which creates great synergies..
            </p>
                        <p>
                            Our certified coaches participated in Olympic games, Asian games and other International Swimming
                            competitions and have more than 10 years of coaching experience. We teach a broad range of student
                            groups including youth beginners, students aiming for a swimming scholarship for a college, and adults
                            with recreation purposes.
            </p>
                        <p>
                            Our excellent coaching staff and their extraordinary credentials make USSG differ from other general
                            swim clubs in many levels. We provide the most efficient and well-structured lessons. USSG offer four
                            types of programs: individual, group, competitive swim team and synchronized swimming. We always make
                            sure our members can reach their goals under our guidance and most importantly enjoy swimming.
            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
