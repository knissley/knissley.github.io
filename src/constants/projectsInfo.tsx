import { project } from '../types/project';
import DogMeetDogImage from '../assets/dog-meet-dog.png';
import TrailCompanionsImage from '../assets/trail-companions.png';
import AtelierEcommerceImage from '../assets/atelier-ecommerce.png';
import AtelierSystemDesignImage from '../assets/system-design.png';

const projects:project[] = [
  {
    title: 'Trail Companions',
    description: 'A full stack web application utilizing APIs such as the Google Maps and Calendar APIs to help hikers find their new favorite trails - and invite their friends!',
    imageUrl: TrailCompanionsImage,
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: '',
    technologies: ['Next.js','Node.js, Express.js, PostgreSQL, Firebase'],
  },
  {
    title: 'Atelier System Design',
    description: 'A complete overhaul of a monolothic API, my microservice architecture increased the throughput of the legacy API by over 5x and reduced latency by over 20x.',
    imageUrl: AtelierSystemDesignImage,
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: '',
    technologies: ['AWS','Nginx','New Relice','PostgreSQL','Node.js'],
  },
  {
    title: 'DogMeetDog',
    description: 'Devloped within a 4-day coding challenge, DogMeetDog is a React Native app intended to help dog owners find playdates for their dogs.',
    imageUrl: DogMeetDogImage,
    imageOrientation: 'portrait',
    deployedUrl: '',
    githubUrl: '',
    technologies: ['React Native','Typescript, PostgreSQL, Expo'],
  },
  {
    title: 'Atelier eCommerce',
    description: 'Handling the design from the ground-up, this project was a full overhaul of an eCommerce frontend.',
    imageUrl: AtelierEcommerceImage,
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: '',
    technologies: ['React','Styled-components'],
  },
];

export default projects;