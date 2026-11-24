import p1 from './p1.png';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import p5 from './p5.png';
import p6 from './p6.png';
import p7 from './p7.png'; 
import theme1 from './theme1.jpg';
import theme2 from './theme2.jpg';
import theme3 from './theme3.jpg';


export const assets = {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    theme1,
    theme2,
    theme3
}

export const projects = [
    {
        _id: 1,
        title: 'Project 1',
        description: 'Description for project 1',
        image: [p1],
        category: 'HTML and CSS',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'http://github.com/project1',
        projectUrl: 'http://liveproject1.com',
        latest: true,
        comingSoon: false
    },
    {
        _id: 2,
        title: 'Project 2',
        description: 'Description for project 2',
        image: [p2],
        category: 'React',
        technologies: ['React', 'JavaScript', 'CSS'],
        githubUrl: 'http://github.com/project2',
        projectUrl: 'http://liveproject2.com',
        latest: true,
        comingSoon: false
    },
    {
        _id: 3,
        title: 'Project 3',
        description: 'Description for project 3',
        image: [p3],
        category: 'Next',
        technologies: ['Next', 'React', 'CSS'],
        githubUrl: 'http://github.com/project3',
        projectUrl: 'http://liveproject3.com',
        latest: true,
        comingSoon: false
    },
    {
        _id: 4,
        title: 'Project 4',
        description: 'Description for project 4',
        image: [p4],
        category: 'MERN STACK',
        technologies: ['Node', 'Express', 'MongoDB'],
        githubUrl: 'http://github.com/project4',
        projectUrl: 'http://liveproject4.com',
        latest: true,
        comingSoon: false
    },
    {        
        _id: 5,
        title: 'Project 5', 
        description: 'Description for project 5',
        image: [p5],
        category: 'HTML and CSS',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubUrl: 'http://github.com/project5',
        projectUrl: 'http://liveproject5.com',
        latest: false,
        comingSoon: true
    },
    {        
        _id: 6,
        title: 'Project 6', 
        description: 'Description for project 6',
        image: [p6],
        category: 'MERN STACK',
        technologies: ['Node', 'react', 'Express'],
        githubUrl: 'http://github.com/project6',
        projectUrl: 'http://liveproject6.com',
        latest: false,
        comingSoon: true
    },
    {        
        _id: 7,
        title: 'Project 7', 
        description: 'Description for project 7',
        image: [p7],
        category: 'React',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        githubUrl: 'http://github.com/project7',
        projectUrl: 'http://liveproject7.com',
        latest: false,
        comingSoon: false
    },

]

