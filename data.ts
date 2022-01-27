import { RiComputerLine } from 'react-icons/ri';
import { BsServer } from 'react-icons/bs'
import { IExp, IProject, IServices } from './type'

export const services: IServices[] = [
    {
        title: "Frontend Dev",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: RiComputerLine
    },
    {
        title: "Backend Dev",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: BsServer
    },
    {
        title: "Service3",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: RiComputerLine
    },
    {
        title: "Service4",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: RiComputerLine
    },
    {
        title: "Service5",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: RiComputerLine
    },
    {
        title: "Service6",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non lorem ornare, aliquam enim vitae, gravida diam. Vivamus luctus pharetra vulputate. Ut risus elit.",
        Icon: RiComputerLine
    },

]

export const exp: IExp[] = [
    {
        workplace: 'ABCXYZ',
        position: 'MERN Stack Web Developer',
        duration: 'Sep 2021 - Nov 2021',
        description: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
            'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.'
        ],
        category:["ABCXYZ"]
    },
    {
        workplace: 'LMNOPQR',
        position: 'Full Stack Web Developer',
        duration: 'Jan 2022 - Aug 2022',
        description: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
            'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.'
        ],
        category:["LMNOPQR"]
    },
    {
        workplace: 'IEEE',
        position: 'Game Developer',
        duration: 'June 2020 - Feb 2021',
        description: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
            'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Blanditiis commodi, cupiditate eaque velit placeat nam dolores aliquid distinctio ',
            'Ratione sint ducimus in cumque soluta consectetur a iste possimus cum aliquam.',
        ],
        category:["IEEE"]
    },
]

export const project: IProject[] = [
    {
        name:"Castle Runner",
        desc:"It is a platform game. You must race against time and clear all the levels to win the game. You can jump, run, and walk across each level. The levels are full of enemies and open holes",
        image_path:"/web.webp",
        github_url:"https://github.com/bhumikapatidar/CastleRunner",
        key_tech:["C#", "Unity"]
    },
    { 
        name: "COVID Tracker",
        desc:"This app shows a statistical view about corona virus over the world",
        image_path:"/web.webp",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        key_tech: ["React", "Chart.js", "Material UI"],
      },
    {
        name:"Movie Search App",
        desc:"This web application will show titles, ratings and movie descriptions of the most popular films. User can also use the filter option to find movies of different genres like adventure, comedy, etc",
        image_path:"/web.webp",
        github_url:"https://github.com/bhumikapatidar/search_movie_app",
        key_tech:[" Html", "CSS", "JavaScript", "API"]
    },
    {
        name:"To do list",
        desc:"A full stack to-do list built with Express and Node.js with all the CRUD operations. The use of MongoDB as the database ensures proper storage of your todos. You can create, read, update and delete any todo as per your choice",
        image_path:"/todolist.PNG",
        github_url:"https://github.com/bhumikapatidar/to-do-list",
        key_tech:["Html", "CSS", "Bootstrap", "jQuery", "JavaScript", "Node.js", "Express.js", "MongoDB"]
    },
]