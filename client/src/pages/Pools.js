import React from 'react';
import { Card, CardImg, Button, CardTitle, CardText } from 'reactstrap';
import lodiPic from "../images/lodiPic.jpe";
import bccPic from "../images/bccPic.jpg";
import holisticPic from "../images/holisticPic.jpg";
import cliftonsportsPic from "../images/cliftonsportsPic.jpg";
import panzercenterPic from "../images/panzercenterPic.jpg";
import "./style.css";

const Pools = (props) => {
    return (
        <div className="pools-container">

            <Card body inverse color="primary">
                <CardImg top width="90%" src={lodiPic} />
                <CardTitle>Lodi Boys & Girls Club</CardTitle>
                <CardText>460 Passaic Ave Lodi, NJ 07644</CardText>
                <Button color="secondary">Google Maps</Button>
            </Card>
            <Card body inverse color="success">
                <CardImg top width="90%" src={bccPic} />
                <CardTitle>Bergen Community College</CardTitle>
                <CardText>400 Paramus Rd Paramus, NJ 07652</CardText>
                <Button color="secondary">Google Maps</Button>
            </Card>
            <Card body inverse color="info">
                <CardImg top width="90%" src={holisticPic} />
                <CardTitle>CGI Holistic Fitness & Spa</CardTitle>
                <CardText>111 Homans Ave Closter, NJ 07624</CardText>
                <Button color="secondary">Google Maps</Button>
            </Card>
            <Card body inverse color="warning">
                <CardImg top width="90%" src={cliftonsportsPic} />
                <CardTitle>Clifton Sports</CardTitle>
                <CardText>199 Scoles Ave Clifton, NJ 07012</CardText>
                <Button color="secondary">Google Maps</Button>
            </Card>
            <Card body inverse color="danger">
                <CardImg top width="90%" src={panzercenterPic} />
                <CardTitle>Panzer Athletic Center</CardTitle>
                <CardText>College Ave Montclair, NJ 07043</CardText>
                <Button color="secondary">Google Maps</Button>
            </Card>
        </div>
    );
};

export default Pools;