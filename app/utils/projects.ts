import stackImage from '@/app/assets/stackoverflow.png';
import NextUI from '@/app/assets/Nextui.png'
import socialImage from '@/app/assets/social.png';
import modernImage from '@/app/assets/Modern.png';
import Drumkit from '@/app/assets/drumkit.png';
import Plabase from '@/app/assets/plabase.png';
import AwsImage from '@/app/assets/awsImage.png';
import DEC from '@/app/assets/dec.png';

export const projects=[
     {
        id:1,
        image: Plabase,
        title:'Plabase',
        description:"Developed a dynamic search feature for plastic materials, allowing users to search by manufacturer, product name, ISO material code, and key properties (thermal, mechanical, electrical, optical).",
        live:'https://qa.en.plabase.com/',
    },

    {
        id:2,
        image: DEC,
        title:'Happylogue',
        description: "Happylogue is a service that aims to turn Facebook content into photobooks. Verified the API functionality for creating photobooks. Conducted end-to-end testing of the photobook creation process, ensuring seamless integration from content selection to order placement.",
        live:'https://app.happylogue.com/login',
    },

    {
        id: 4,
        image:Drumkit,
        title:'RBAC Mini‐CRM/PMS',
        description:'This is a modern, full-stack web application designed for managing projects, tasks, and leads. The dashboard provides real-time metrics, allowing users to track active projects, daily tasks, and overall organizational performance. The application is built with a focus on a responsive user experience, scalability, and type safety.',
        github:'https://github.com/soniiya/B2BInDemand-Task.git'
    },

    {
        id: 5,
        image:Drumkit,
        title:'NextAuth + Prisma',
        description:'Next.js + Tailwind CSS v4 + NextAuth.js + Prisma combines the performance benefits of Next.js with the utility-first styling of Tailwind CSS, secure authentication via NextAuth.js, and efficient database management using Prisma ORM.',
        github:'https://github.com/soniiya/Pixel-task.git'
    },

    {
        id: 6,
        image: stackImage,
        title:'Stack-overflow clone',
        description:'I made a clone of stack overflow which is a full stack application. I built this application using MERN stack development process. I learnt about React-redux and RestAPIs.',
        live:'https://stack-overflow-sonia.netlify.app/',
        github:'https://github.com/soniiya/StackOverflow-clone.git'
    },
    {
        id: 7,
        image: socialImage,
        title:'Photo sharing application',
        description:'This is also a full-stack application but I used MySQL instead of MongoDB database in this project. I implemented authentication and image sharing functionality.',
        live:'https://social-media-react-project.netlify.app/',
        github:'https://github.com/soniiya/photo_sharing_application.git'
    },
    {
        id: 8,
        image: AwsImage,
        title:'AWS project',
        description:'Developed a serverless application using AWS Amplify and AWS Lambda for executing post-confirmation triggers to automate user profile creation.',
        github: 'https://github.com/soniiya/Serverless-aws-application.git'
    },
    // {
    //     id: 6,
    //     image: NextUI,
    //     title:'Nextjs project',
    //     description:'This is Nextjs and MongoDB based ful-stack application. Learnt how to implement server side and client side rendering and how to connect database on Nextjs application.',
    //     github:'https://github.com/soniiya/NEXT_full-stack.git'
    // },
    {
        id: 9,
        image:modernImage,
        title:'Modern UI/UX frontend-project',
        description:'This is modern UI/UX based React appliction which is fully responsive. I leant a lot about CSS ans responsive designs for all the devices in this project.',
        live:'https://soniiya.github.io/modern-ui-react',
        github:'https://github.com/soniiya/modern-ui-react.git'
    },
    {
        id: 10,
        image:Drumkit,
        title:'Drum-kit',
        description:'This was a my first project while learning Javascript. I learnt basic javaScript functions and objects and how to manipulate DOM tree using javaScript by making interactive application.',
        live:'https://soniiya.github.io/Drum-kit'
    },
]
