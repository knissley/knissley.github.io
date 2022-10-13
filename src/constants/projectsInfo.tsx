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
    longDescription: ['My biggest backend undertaking thus far, this system design project involved dismantling the legacy API that was intially serving data to my previous eCommerce project. The legacy API was built with a monolithic structure with long latency times and high error rates.', 'To improve the API I decided to split the main features into their own microservices: Product Information, Related Products, Ratings & Reviews, and Questions & Answers. These were designed much like you\'d see in their real-world counterparts on eCommerce pages.', 'The first challenge in the redesign was handling the over 10 million rows of data, and optimizing queries against that data. One instance in particular was in handling the Product Information microservice, where the most often-ran query was also the most complicated. This query pulled data from multiple tables and had to transform the results in a very specific manner to fit with the frontend. To improve this query time I constructed a materialized view - a new table where each row was the entire desired result of the initial query. After building this view, the query time was reduced from 200ms to below 1ms.', 'Following various database optimizations, the next step was to deploy the service and allow it to scale up and down depending on traffic. This step was where I began to utilize Nginx and AWS cloud services to route traffic and adjust the number of server instances based on traffic.', 'By the end of this project, I had improved the legacy API throughput by over 5x, the latency by over 20x, and brought the error rate down to 0%.'],
    images: [AtelierSystemDesignImage],
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: 'https://github.com/HR-Pho/sdc-products-service',
    technologies: ['AWS','Nginx','New Relice','PostgreSQL','Node.js'],
  },
  {
    id: 3,
    title: 'DogMeetDog',
    description: 'Developed within a 4-day coding challenge, DogMeetDog is a React Native app intended to help dog owners find playdates for their dogs.',
    longDescription: ['When I was first learning to code, the number one thing that got me excited was creating applications my friends and family could use, and DogMeetDog is a perfect example of that. At the start of my coding journey, one of my closest friends had the fun idea of a mobile application that could help her find playdates for her dog with other nearby dog owners. I immediately started making notes of all the features the app could have, and drew up a Figma design of how it would look.', 'At that time I didn\'t have the skills to build a mobile application, but fast forward just a month and a half into my time at Hack Reactor and we had a challenge sprint to create the MVP of an application in just 4 days. I had zero experience with mobile development at that point, but I knew I had to bring DogMeetDog to life and I took on the challenge.', 'Learning React Native and Expo in only a couple of days proved to be a big challenge, but I began to fall in love with mobile development and all the little differences compared to web development. This project inspired me to create more React Native applications and even dive into another mobile framework, Flutter.'],
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
    longDescription: ['My first team project as an engineer, Atelier eCommerce taught me a lot about team workflows when building applications. We used a ticketing system, set code standards and held regular standups.', 'From this project I\'m the most proud of the design and user experience my team created, drawing inspiration from many modern eCommerce websites.'],
    images: [AtelierEcommerceImage],
    imageOrientation: 'landscape',
    deployedUrl: '',
    githubUrl: 'https://github.com/Baratheon-Stags/front-end-capstone',
    technologies: ['React','Styled-components'],
  },
];

export default projects;