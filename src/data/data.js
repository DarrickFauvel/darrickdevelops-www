export const tabs = [
  {
    id: 1,
    title: "Featured",
    subtitle: "Featured Projects",
    category: "featured",
    description: "Some of my favorite projects.",
  },
  {
    id: 2,
    title: "Components",
    subtitle: "Page Components",
    category: "component",
    description: "Components for use in a web page",
  },
  {
    id: 3,
    title: "Sections",
    subtitle: "Page Sections",
    category: "section",
    description: "Sections for use in a web page",
  },
  // {
  //   id: 4,
  //   title: 'Landings',
  //   subtitle: 'Landing Pages',
  //   category: 'landing',
  //   description: 'Landing pages'
  // },
  {
    id: 5,
    title: "JavaScript",
    subtitle: "JavaScript Apps",
    category: "javascript",
    description: "JavaScript app",
  },
  {
    id: 6,
    title: "React",
    subtitle: "React Apps",
    category: "react",
    description: "React apps",
  },
]

export const projects = [
  {
    id: 1,
    title: "Petri Paint",
    titleLong: "Petri Paint app",
    subtitle: "Hackathon Project",
    client: "Mintbean Hackathon",
    category: ["javascript"],
    stack: ["HTML", "CSS", "JavaScript", "Canvas"],
    description: {
      goal: "Create an app where the user can move the mouse across the screen and draw free-form lines.",
      inspiration:
        "I have an interest in science, so I wondered if I could create a circular canvas to represent a petri dish.",
      challenge: "I had never used the canvas element before.",
      solution:
        "I consulted the MDN docs to learn more about the canvas element.",
      future: "Make the app mobile friendly.",
    },
    image: "./project-1.gif",
    solutionUrl: "",
    liveUrl: "https://darrickfauvel.github.io/petri-paint/",
    repoUrl: "https://github.com/DarrickFauvel/petri-paint",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Four card feature",
    titleLong: "Four card feature section",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["section"],
    stack: ["HTML", "CSS Open Props", "Vite"],
    description: {
      goal: "Use my responsive layout skills to accurately build a four card feature section as per the design specs.",
      inspiration:
        "I wanted to add an interesting mouse hover effects to the cards for fun and also use CSS Open Props.",
      challenge: "",
      solution: "",
      future:
        "Possibly use apply a media query for a two-column view on mid-size screens.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/zmjrb4iruu8wzaw3cogv.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/four-card-feature-section-css-open-props-and-vite-Hy2_13j7q",
    liveUrl: "https://fem11-four-card-feature-section-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem11-four-card-feature-section",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Order summary",
    titleLong: "Order summary component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS", "Parcel"],
    description: {
      goal: "Use my responsive layout skills to accurately build an  order summary component as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Possibly use some animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/r4uw3xedzy1j6dn95dhe.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/order-summary-component-html-and-css-tcdb19Xqt",
    liveUrl: "https://fem03-order-summary-component-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem03-order-summary-component",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Social proof",
    titleLong: "Social proof section",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["section"],
    stack: ["HTML", "Sass", "Vite"],
    description: {
      goal: "Use my responsive layout skills to accurately build a social proof section as per the design specs.",
      inspiration: "",
      challenge: "Responsively display on all screen sizes.",
      solution: "Visually test and apply media queries as needed.",
      future:
        "Possibly use some subtle animation effects as the section loads.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/i9xoulbwta93iu52gi3v.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/social-proof-section-html-css-and-vite-mZ9Yax8r5",
    liveUrl: "https://fem10-social-proof-section-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem10-social-proof-section",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Profile card",
    titleLong: "Profile card component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS", "Vite"],
    description: {
      goal: "Use my responsive layout skills to accurately build a profile card component as per the design specs.",
      inspiration: "",
      challenge: "The background images were tricky.",
      solution:
        "With a little help from the community, I got the images placed exactly the way I wanted.",
      future: "Possible animate the card.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/krvnlihf4irij953yx9g.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/profile-card-component-html-css-and-vite-ax2scK1Od",
    liveUrl: "https://fem08-profile-card-component-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem08-profile-card-component",
    isFeatured: false,
  },
  {
    id: 6,
    title: "QR code",
    titleLong: "QR code component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS"],
    description: {
      goal: "Use my layout skills to accurately build a QR code component as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Possibly use some animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/audiapygpyulsggojfwv.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/qr-code-component-html-css-and-figma-dkiZ-xoL4",
    liveUrl: "https://fem01-qr-code-component-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem01-qr-code-component",
    isFeatured: false,
  },
  {
    id: 7,
    title: "Time tracking dashboard",
    titleLong: "Time tracking dashboard",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["landing", "react"],
    stack: ["HTML", "CSS", "Sass", "React"],
    description: {
      goal: "Use my responsive layout and React skills to accurately build an interactive time tracking dashboard as per the design specs. Data is dynamically displayed using React functional components.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Possibly make responsive with two and three column layout.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/ykxywfx6occh8cbmlghl.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/time-tracking-dashboard-react-and-sass-ZXBXih2g5",
    liveUrl: "https://fem06-time-tracking-dashborad-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem06-time-tracking-dashboard",
    isFeatured: false,
  },

  {
    id: 8,
    title: "NFT preview card",
    titleLong: "NFT preview card component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS"],
    description: {
      goal: "Use my layout skills to accurately build an NFT preview card component as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Possibly use some animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/f3bejlae1p7rop59ewr0.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/nft-preview-card-component-html-and-css-eRkDppP-t",
    liveUrl:
      "https://darrickfauvel.github.io/fem02-nft-preview-card-component/",
    repoUrl:
      "https://github.com/DarrickFauvel/fem02-nft-preview-card-component",
    isFeatured: false,
  },
  {
    id: 9,
    title: "3 column preview card",
    titleLong: "3 column preview card component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS", "Sass", "Parcel"],
    description: {
      goal: "Use my responsive layout skills to accurately build a 3 column preview card component as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Possibly use some subtle animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/zfcpxhf3ghumw5xwk8ov.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/3-column-preview-card-component-htmlsassparcel-xwNRbfDmU",
    liveUrl: "https://fem05-3-column-preview-card-component-drrck.netlify.app/",
    repoUrl:
      "https://github.com/DarrickFauvel/fem05-3-column-preview-card-component",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Single price grid",
    titleLong: "Single price grid component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "Sass", "CSS Grid", "Vite"],
    description: {
      goal: "Use my responsive layout skills to accurately build a single price grid component as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "Structured this component using CSS grid.",
      future: "",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/sxlu3lktae5wsgt9sv4g.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/single-price-grid-component-html-sass-grid-and-vite-bPAyz8cJe",
    liveUrl: "https://fem09-single-price-grid-component-drrck.netlify.app/",
    repoUrl:
      "https://github.com/DarrickFauvel/fem09-single-price-grid-component",
    isFeatured: false,
  },

  {
    id: 11,
    title: "FAQ accordion card",
    titleLong: "FAQ accordion card component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component", "javascript"],
    stack: ["HTML", "CSS", "JavaScript", "Parcel"],
    description: {
      goal: "Use my responsive layout and JavaScript skills to accurately build an interactive FAQ accordion card as per the design specs.",
      inspiration: "",
      challenge: "Responsively align and layer multiple images.",
      solution: "It was tricky, but I got the results per the design.",
      future: "Possibly use some animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/xvugv8kclktcrspoxjga.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/faq-accordion-card-htmlcssjs-rzpYTV0Ig",
    liveUrl: "https://fem04-faq-accordion-card-drrck.netlify.app/",
    repoUrl: "https://github.com/DarrickFauvel/fem04-faq-accordion-card",
    isFeatured: false,
  },
  {
    id: 12,
    title: "Stats preview card",
    titleLong: "Stats preview card component",
    subtitle: "",
    client: "Frontend Mentor",
    category: ["component"],
    stack: ["HTML", "CSS", "Sass", "Parcel"],
    description: {
      goal: "Use my responsive layout skills to accurately build a stats preview card component as per the design specs.",
      inspiration: "",
      challenge: "The supplied image was only grayscale.",
      solution:
        "I applied the CSS property mix-blend-mode to get the exact results per the design. NOTE: My personal method has been cited in the FEM community many times, as many others' solutions do not match the design.",
      future: "Possibly use some subtle animation effects.",
    },
    image:
      "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/foygh516ohxsitr4z2ll.jpg",
    solutionUrl:
      "https://www.frontendmentor.io/solutions/stats-preview-card-component-html-and-sass-rDQsqj-37",
    liveUrl: "https://fem07-stats-preview-card-component-drrck.netlify.app/",
    repoUrl:
      "https://github.com/DarrickFauvel/fem07-stats-preview-card-component",
    isFeatured: false,
  },

  {
    id: 13,
    title: "Color Scheme Generator",
    titleLong: "Color Scheme Generator",
    subtitle: "",
    client: "Scrimba",
    category: ["app", "javascript"],
    stack: ["HTML", "CSS", "JavaScript", "API", "Vite"],
    description: {
      goal: "Use my JavaScript skills to accurately build a color scheme generator app as per the design specs.",
      inspiration: "",
      challenge:
        "The design required the selected color code be copied to the clipboard.",
      solution:
        "A little MDN research about navigator.clipboard.writeText() provided the solution.",
      future: "Possibly use some animation effects.",
    },
    image:
      "https://raw.githubusercontent.com/DarrickFauvel/scrim03-color-scheme-generator-js/3489319fbd06fa39c87c4b0b2a42ffbeed59f281/screenshot.png",
    solutionUrl: "",
    liveUrl: "https://scrimba03-color-scheme-generator-js-drrck.netlify.app/",
    repoUrl:
      "https://github.com/DarrickFauvel/scrim03-color-scheme-generator-js",
    isFeatured: false,
  },
  {
    id: 14,
    title: "Random Password Generator",
    titleLong: "Random Password Generator",
    subtitle: "",
    client: "Scrimba",
    category: ["app", "javascript"],
    stack: ["HTML", "Sass", "JavaScript", "Vite"],
    description: {
      goal: "Use my JavaScript skills to accurately build a password generator app as per the design specs.",
      inspiration: "",
      challenge: "",
      solution: "",
      future: "Add a click-to-copy-password feature.",
    },
    image:
      "https://raw.githubusercontent.com/DarrickFauvel/scrim02-random-password-generator-js/main/screenshot.png",
    solutionUrl: "",
    liveUrl: "https://scrimba02-password-generator-js-drrck.netlify.app/",
    repoUrl:
      "https://github.com/DarrickFauvel/scrim02-random-password-generator-js",
    isFeatured: false,
  },
  {
    id: 15,
    title: "Darrick Develops",
    titleLong: "Darrick Develops",
    subtitle: "",
    client: "Darrick Develops",
    category: ["react"],
    stack: ["HTML", "Sass", "CSS Open Props", "React", "JSON", "Vite"],
    description: {
      goal: "Create an interactive portfolio displaying some of my work.",
      inspiration: "",
      challenge:
        "I had a number of projects that needed to be featured in their own categories.",
      solution: "I setup a JSON data file containing all of my project info.",
      future: "I will be putting the data into a database API.",
    },
    image: "/darrickdevelops-www.png",
    solutionUrl: "",
    liveUrl: "https://darrickdevelops.com/",
    repoUrl: "https://github.com/DarrickFauvel/darrickdevelops-www",
    isFeatured: true,
  },
  {
    id: 16,
    title: "Target redTool",
    titleLong: "Target redTool",
    subtitle: "Web app to help team members on the job",
    client: "Target",
    category: ["react"],
    stack: ["HTML", "CSS", "React", "Vite", "Nanostores", "AWS Amplify"],
    description: {
      goal: "Create a tool to generate barcodes quickly.",
      inspiration:
        "Scanning barcodes at Target is a necessity. As a team member, there are occasions when a barcode label is not scannable because of damage or inaccesibility. I needed the ability to generate a scannable barcode to make my job more efficient.",
      challenge:
        "I didn't know if there was a library to generate the actual barcode format used by Target.",
      solution:
        "The barcode used by Target is a standard format, and React Barcode is the library used.",
      future:
        "I would like add a break timer, and maybe a before and after shift weather feature.",
    },
    image: "redtool_01.png",
    solutionUrl: "",
    liveUrl: "https://redtool.darrickdevelops.com/",
    repoUrl: "https://github.com/DarrickFauvel/redtool",
    isFeatured: true,
  },
  {
    id: 17,
    title: "YumYumYes!",
    titleLong: "YumYumYes! Recipes",
    subtitle: "Web app to help users search and save recipes",
    client: "Chingu",
    category: ["react"],
    stack: [
      "HTML",
      "CSS",
      "React",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Headless UI",
    ],
    description: {
      goal: "Use the Tasty API to create an app that will help anyone interested in creating dishes and flavours to explore recipes in novel ways.",
      inspiration: "",
      challenge:
        "Collaboratively work remotely with multiple designers and developers to produce this project.",
      solution:
        "We used agile methodology to communicate and collaborate in weekly sprints.",
      future: "",
    },
    image:
      "https://raw.githubusercontent.com/chingu-voyages/v46-tier2-team-19/development/public/screenshots/screenshot-home-dev.png",
    solutionUrl: "",
    liveUrl: "https://yumyumyes.com/",
    repoUrl: "https://github.com/chingu-voyages/v46-tier2-team-19",
    isFeatured: true,
  },
]

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
]

export const skills = [
  "React • Next.js • Styled Components",
  "Agile Development • Remote Work",
  "HTML • CSS • JavaScript • ES6",
  "Tailwind CSS • SASS • Git",
  "MongoDB • Express • Node.js",
  "PHP • SQL • Bootstrap",
]
