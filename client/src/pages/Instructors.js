import React from 'react';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import "./style.css";
import joshPic from "../images/joshPic.jpg";
import josephPic from "../images/josephPic.jpg";
import maryPic from "../images/maryPic.jpg";
import rubenPic from "../images/rubenPic.jpeg";
import judePic from "../images/judePic.jpg";
import jasonPic from "../images/jasonPic.jpg";


const Instructors = (props) => {
    return (
        <div className="instructors-container">
            <CardDeck>
                <Card>
                    <CardImg top height="400px" top width="300px" src={joshPic} />
                    <CardBody>
                        <CardTitle>Joshua Kim</CardTitle>
                        <CardSubtitle>Head Coach</CardSubtitle>
                        <CardText>U.S. Swimming Group, Inc
- Co-founder
New Jersey Swimming Group
- Head Coach of ACE Swim Team
New Jersey - Korean Swimming Association
- President
YMCA of Greater Bergen County
- Head Coach (ACE Program)
USA Swimming, Registered Coach (Current)
American Red Cross, Certified Lifeguard (Current)
US Armed Force Veteran. United States Air Force, Fitness Specialist (2010)
Yonsei University, BA, Physical Education & Leisure and Recreation (2005)
Korean National Swim Team Member(1994,95,97)
Won 21 Golds , 26 silvers, 11 Bronzes in National Swim events
U.S. Open Breast Storke 25m 14th (1994)</CardText>

                    </CardBody>
                </Card>
                <Card>
                    <CardImg top height="400px" top width="300px" src={josephPic} />
                    <CardBody>
                        <CardTitle>Joseph Lee</CardTitle>
                        <CardSubtitle>Head Coach</CardSubtitle>
                        <CardText>U.S. Swimming Group, Inc
- Co-founder
New Jersey Swimming Group
- Head Coach
Korea University, BA, Physical Education (2006)
Former Member of Korea Swimming National Team (1994-1998)
Dolphins Swimming School, President (2007-2012)
Korea Swimming Federation, Certified Coach (2011)
Korea Swimming Federation, Certified Referee (2011)
Canada Swimming Coach Training (2006-2007)
Competed in Atlanta Olympic Game (1996)
Asia Swimming Championship  Freestyle 1500m 1st (1996)
Invited Attendee Pan Pacific Swimming Championship (1997)
CMAS, Word Underwater Federation Certified Instructor (2012)</CardText>

                    </CardBody>
                </Card>
                <Card>
                    <CardImg top height="400px" top width="300px" src={maryPic} />
                    <CardBody>
                        <CardTitle>Mary Kim</CardTitle>
                        <CardSubtitle>Synchronized Team Head Coach</CardSubtitle>
                        <CardText>M Synchronized Swimming Team
- Head Coach
Ewha  Womans University, BA, Social Physical Education (2005)
 Former Member of Korea Synchronizes Swimming National Team(2000-2001)
US Synchronized Swimming Certified Coach (Current)
M Synchronized Swimming Team Head Coach (Current)
Competed in Sydney Olympic Game (2000)
World Cup Synchronized Swimming Championship (1999)
Korea Swimming Federation, Synchronized Swimming Certified Coach (2010)
Korea Swimming Federation, Synchronizes Swimming Certified Referee (2009)
Dolphins Swimming School Coach (2007-2012)</CardText>

                    </CardBody>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <CardImg top height="500px" top width="400px" src={jasonPic} />
                    <CardBody>
                        <CardTitle>Jason Lee</CardTitle>
                        <CardSubtitle>Manager & Instructor</CardSubtitle>
                        <CardText></CardText>

                    </CardBody>
                </Card>
                <Card>
                    <CardImg top height="500px" top width="400px" src={rubenPic} />
                    <CardBody>
                        <CardTitle>Ruben Chavez</CardTitle>
                        <CardSubtitle>Instructor</CardSubtitle>
                        <CardText></CardText>

                    </CardBody>
                </Card>
                <Card>
                    <CardImg top height="500px" top width="400px" src={judePic} />
                    <CardBody>
                        <CardTitle>Jude Sanchez</CardTitle>
                        <CardSubtitle>Instructor</CardSubtitle>
                        <CardText></CardText>

                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
};

export default Instructors;