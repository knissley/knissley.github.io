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
    longDescription: [],
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