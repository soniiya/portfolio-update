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
        title:'DEC',
        description: "Enhanced visual appeal and interactivity by implementing smooth animations and dynamic sliders using CSS and JavaScript. Seamlessly connected the front-end with a .NET Core backend.",
        live:'https://dec.wsisites.net/',
    },

    {
        id: 3,
        image: stackImage,
        title:'Stack-overflow clone',
        description:'I made a clone of stack overflow which is a full stack application. I built this application using MERN stack development process. I learnt about React-redux and RestAPIs.',
        live:'https://stack-overflow-sonia.netlify.app/',
        github:'https://github.com/soniiya/StackOverflow-clone.git'
    },
    {
        id: 4,
        image: socialImage,
        title:'Photo sharing application',
        description:'This is also a full-stack application but I used MySQL instead of MongoDB database in this project. I implemented authentication and image sharing functionality.',
        live:'https://social-media-react-project.netlify.app/',
        github:'https://github.com/soniiya/photo_sharing_application.git'
    },
    {
        id: 5,
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
        id: 6,
        image:modernImage,
        title:'Modern UI/UX frontend-project',
        description:'This is modern UI/UX based React appliction which is fully responsive. I leant a lot about CSS ans responsive designs for all the devices in this project.',
        live:'https://soniiya.github.io/modern-ui-react',
        github:'https://github.com/soniiya/modern-ui-react.git'
    },
    {
        id: 7,
        image:Drumkit,
        title:'Drum-kit',
        description:'This was a my first project while learning Javascript. I learnt basic javaScript functions and objects and how to manipulate DOM tree using javaScript by making interactive application.',
        live:'https://soniiya.github.io/Drum-kit'
    },
]
