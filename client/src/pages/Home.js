import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "./style.css";

const items = [
    {
        src: "./images/c2.jpg",
        className: "min-vh-100",
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1'
    },
    {
        src: "./images/c7.jpg",
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
    },
    {
        src: "./images/c24.jpg",
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: '3'
    }
];

const Home = () => <UncontrolledCarousel items={items} />;

export default Home;