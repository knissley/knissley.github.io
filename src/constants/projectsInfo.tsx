import { project } from '../types/project';
import DogMeetDogImage from '../assets/dog-meet-dog.png';
import TrailCompanionsImage from '../assets/trail-companions.png';
import AtelierEcommerceImage from '../assets/atelier-ecommerce.png';
import AtelierSystemDesignImage from '../assets/system-design.png';

const projects:project[] = [
  {
    id: 1,
    title: 'Trail Companions',
    description: 'A full stack web application utilizing APIs such as the Google Maps and Calendar APIs to help hikers find their new favorite trails - and invite their friends!',
    longDescription: ['Developed in a team with 7 other engineers, Trail Companions is a full stack web application built with Next.js. This application utilizes Google Maps API, Google Calendars API, Firebase Authentication and AWS EC2 instances.', 'In this project I was the UI/UX design lead and created the wireframes and mockups of the application as well as instituted a styling guide for the team to follow.', 'I also led the charge on user authentication and Google API integrations. I utilized Firebase and Google Auth for the login process, as well as a routeguarding component across the application to redirect unauthorized traffic.'],
    images: [TrailCompanionsImage],
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: 'https://github.com/orgs/Klippan-BO/repositories',
    technologies: ['Next.js','Node.js, Express.js, PostgreSQL, Firebase'],
  },
  {
    id: 2,
    title: 'Atelier System Design',
    description: 'A complete overhaul of a monolothic API, my microservice architecture increased the throughput of the legacy API by over 5x and reduced latency by over 20x.',
    longDescription: [],
    images: [AtelierSystemDesignImage],
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: 'https://github.com/HR-Pho/sdc-products-service',
    technologies: ['AWS','Nginx','New Relice','PostgreSQL','Node.js'],
  },
  {
    id: 3,
    title: 'DogMeetDog',
    description: 'Devloped within a 4-day coding challenge, DogMeetDog is a React Native app intended to help dog owners find playdates for their dogs.',
    longDescription: [],
    images: [DogMeetDogImage],
    imageOrientation: 'portrait',
    deployedUrl: '',
    githubUrl: 'https://github.com/knissley/DogMeetDog',
    technologies: ['React Native','Typescript, PostgreSQL, Expo'],
  },
  {
    id: 4,
    title: 'Atelier eCommerce',
    description: 'Handling the design from the ground-up, this project was a full overhaul of an eCommerce frontend.',
    longDescription: [],
    images: [AtelierEcommerceImage],
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: 'https://github.com/Baratheon-Stags/front-end-capstone',
    technologies: ['React','Styled-components'],
  },
];

export default projects;