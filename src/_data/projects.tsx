import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import ExternalLinkFillIcon from 'remixicon-react/ExternalLinkFillIcon'
import InlineLink from '@/components/common/reusable/InlineLink'
import constants from '@/constants'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import getGitHubUrl from '@/utils/getGitHubUrl'

const github: LinkProps = {
  label: 'Source code',
  icon: <GithubFillIcon size={22} />
}

const live: LinkProps = {
  label: 'Live',
  icon: <ExternalLinkFillIcon size={22} />
}

const getLinks = (githubRepo: string, url?: string): LinkProps[] => {
  const links: LinkProps[] = [{ ...github, url: getGitHubUrl(githubRepo) }]
  if (url) {
    links.push({ ...live, url })
  }
  return links
}

const filters: string[] = [
  'React',
  'Typescript',
  'Tailwind CSS',
  'Firebase',
  'Axios',
  'Python',
  'Flask',
  'TensorFlow',
  'Bootstrap',
  'Genetic Algorithm',
  'CNN',
  'HTML',
  'CSS',
  'JavaScript',
  'Assembly',
  'x86',
  'Next.js',
  'API',
  'jQuery'
]

const projects: ProjectProps[] = [
  {
    slug: 'tehreemcodes',
    featured: true,
    title: 'TehreemCODES',
    description:
      'My portfolio website built with React & TypeScript.',
    techStacks: ['React', 'TypeScript', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('tehreemcodes')
  },
  {
    slug: 'Connectly-Chat-App',
    featured: true,
    title: 'Connectly Chat Application',
    description: 'A real time chat application built using ReactJS and Firebase hosting the database and storage.',
    techStacks: ['React', 'Firebase', 'Tailwind CSS'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'React'],
    category: 'Front-end development',
    links: getLinks('Connectly-Chat-App')
  },
  {
    slug: 'Appco-Banking-App',
    featured: true,
    title: 'AppCo Banking App',
    description: (
      <span>
        A banking application made to make your transactions and banking life easier and efficient.
      </span>
    ),
    techStacks: ['React', 'Axios Mock', 'Firebase'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('Appco-Banking-App')
  },
  {
    slug: 'BraveTrace',
    featured: true,
    title: 'Brave Trace',
    description: (
      <span>
        A forensic tool designed to extract, analyze, and report browser artifacts from the Brave Browser. The tool enables the retrieval of browsing history, passwords, bookmarks, cache data, fillable form data, and more. It also includes support for decrypting saved passwords and analyzing prefetch execution history.
      </span>
    ),
    techStacks: ['Python'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    category: 'Digital forensics',
    links: getLinks('BraveTrace')
  },
  {
    slug: 'Filmception',
    featured: true,
    title: 'Filmception',
    description: "Filmception is an intelligent system that processes movie summaries, predicts movie genres using machine learning, and converts summaries into audio across multiple languages (Arabic, Urdu, and Korean).",
    techStacks: ['Python', 'Flask', 'TensorFlow', 'Bootstrap'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Full-stack development',
    links: getLinks('Filmception')
  },
  {
    slug: 'Exam-Schedular',
    featured: true,
    title: 'Exam Schedular',
    description:
      'This project implements a Genetic Algorithm (GA) from scratch in Python to generate a valid and optimized university exam schedule. The system ensures all hard constraints are strictly enforced while attempting to satisfy multiple soft constraints to enhance the usability and efficiency of the exam timetable.',
    category: 'Full-stack development',
    techStacks: ['Python', 'Genetic Algorithm', 'Flask'],
    otherTechStacks: ['HTML/CSS'],
    links: getLinks('Exam-Schedular')
  },
  {
    slug: 'Traffic-Sign-Classifier-with-CNN',
    featured: true,
    title: 'Traffic Sign Classifier with CNN',
    description:
      "This project uses a Convolutional Neural Network (CNN) to classify images of road signs. It's a critical component in the development of autonomous vehicles, enabling them to detect and interpret traffic signs such as stop signs, speed limits, and yield signs—ensuring safety and lawful decision-making on the road.",
    techStacks: ['CNN', 'Python', 'TensorFlow', 'Flask'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Full-stack development',
    links: getLinks('Traffic-Sign-Classifier-with-CNN')
  },
  {
    slug: 'Six-Degrees-of-Separation',
    featured: true,
    title: 'Six Degrees of Separation',
    description:
      "This project is a Python-based AI application that finds the **shortest connection path** between two actors based on the movies they've appeared in. It's inspired by the game Six Degrees of Kevin Bacon, where the goal is to show how any actor is linked to Kevin Bacon through no more than six film collaborations.",
    category: 'Full-stack development',
    techStacks: ['Python'],
    otherTechStacks: ['HTML/CSS', 'JavaScript', 'PHP'],
    links: getLinks('Six-Degrees-of-Separation')
  },
  {
    slug: 'R-D-Tax-Calculator',
    featured:false,
    title: 'R&D Tax Calculator',
    description:
      "This is a simple, responsive R&D Tax Calculator built with HTML, CSS, and JavaScript. It allows users to input their estimated R&D spend and select their annual turnover to estimate their potential R&D tax offset.",
    category: 'Front-end development',
    techStacks: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('R-D-Tax-Calculator')
  },
  {
    slug: 'candy-crush-x86',
    featured: false,
    title: 'Candy Crush x86',
    description: (
      <span>
        A graphical console-based Candy Crush clone implemented in x86 Assembly Language, using MS-DOS interrupts for graphics, text input/output, and file handling.
      </span>
    ),
    techStacks: ['Assembly', 'x86'],
    otherTechStacks: ['HTML/CSS'],
    category: 'Front-end development',
    links: getLinks('candy-crush-x86')
  },
  
  {
    slug: 'human-vs-ai-chess-minimax',
    title: 'Human vs AI Chess',
    description:
      "This project implements a simplified Human vs AI Chess Game in Python using the Minimax Algorithm (with Alpha-Beta Pruning). It includes a complete object-oriented design, supports standard chess rules and mechanics, and features a GUI for interaction.",
    category: 'Full-stack development',
    techStacks: ['Python', 'Alpha-Beta Pruning', 'Minimax'],
    otherTechStacks: ['HTML/CSS', 'JavaScript'],
    links: getLinks('human-vs-ai-chess-minimax')
  },
  {
    slug: 'ReactNotes',
    title: 'ReactNotes',
    description:
      "A Notes app, built with ReactJS.",
    techStacks: ['React','HTML', 'CSS', 'JavaScript'],
    category: 'Front-end development',
    links: getLinks('ReactNotes')
  },
  {
    slug: 'My-Weather-App',
    title: 'Weather App',
    description:
      "A Weather App that fetches data through API calls using HTML, CSS and JavaScript.",
    category: 'Front-end development',
    techStacks: ['React', 'Tailwind CSS', 'API'],
    otherTechStacks: ['HTML', 'CSS', 'JavaScript'],
    links: getLinks('My-Weather-App')
  },
  {
    slug: 'To-Do-App',
    title: 'To Do App',
    description: "A JavaScript CRUD application that works as a To Do App where you can add, check, uncheck and delete tasks.",
    category: 'Front-end development',
    techStacks: ['JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    links: getLinks('To-Do-App')
  },
  {
    slug: 'qr-code-component',
    title: 'QR Code Component',
    description: (
      <span>
        A beginner-friendly Frontend Mentor challenge focused on building a simple, responsive QR code card using HTML and CSS. The goal is to replicate a clean design that includes an image, heading, and paragraph text. Great for practicing layout techniques, font styling, and mobile responsiveness.
      </span>
    ),
    category: 'Front-end development',
    techStacks: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    links: getLinks('qr-code-component')
  },
  {
    slug: 'results-summary-component',
    title: 'Results Summary Component',
    description:
      "The Results Summary Component challenge from Frontend Mentor is a beginner-friendly project that involves building a responsive summary card using HTML and CSS, with an optional bonus to dynamically render data from a local JSON file.",
    category: 'Front-end development',
    techStacks: ['HTML', 'CSS', 'JavaScript'],
    links: getLinks('results-summary-component')
  },
  {
    slug: 'RD-Tax-Incentive---NextJS',
    title: 'RD Tax Incentive Landing Page',
    description: "A Next.js landing page for R&D Tax Incentive, showcasing the benefits and process of claiming R&D tax incentives in Australia. The page is designed to be responsive and user-friendly, providing essential information to potential claimants.",
    category: 'Front-end development',
    techStacks: ['Next.js', 'HTML', 'CSS', 'JavaScript'],
    links: getLinks('RD-Tax-Incentive---NextJS')
  }
]

export { filters, projects }
