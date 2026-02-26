import { FiInfo } from "react-icons/fi";
import WorkDetailes from "./WorkDetailes";
import { useState } from "react";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

const work = [
  {
    name: "Property4U",
    icon: "./assets/property4u.png",
    description: "Web Application",
    link: "https://property4-u.vercel.app/",
    details: {
      overview:
        "Property4U is a full-featured real estate web application that allows users to explore properties for sale and rent, view detailed listings, and filter results based on their preferences. The platform focuses on performance, clean UI, and real-time property data.",

      features: [
        "Browse properties for sale and rent",
        "Dynamic property search and filtering system",
        "Property details page with slideshow and full specifications",
        "Authentication system (Login & Signup)",
        "Responsive UI optimized for mobile and desktop",
        "Contact agent functionality",
      ],

      tech: [
        "React.js",
        "React Router",
        "Material UI",
        "REST API integration",
        "JavaScript (ES6+)",
        "CSS",
      ],

      highlights: [
        "Integrated multiple APIs for buying and renting properties",
        "Optimized data fetching using useEffect and async calls",
        "Built reusable property card components",
        "Implemented image slideshow for property galleries",
        "Created advanced search filters using URL query params",
      ],
    },
  },
  {
    name: "Titan Crypto",
    icon: "./assets/titan.png",
    description: "Web Application",
    link: "https://mohamedwathig.github.io/Titan-crypto/#/",
    details: {
      overview:
        "Titan Crypto is a cryptocurrency tracking web application that provides real-time market data, detailed coin statistics, and historical price analysis. Users can explore cryptocurrencies, search for coins, view performance charts, and access market insights through an interactive and responsive interface.",

      features: [
        "Live cryptocurrency price tracking",
        "Search functionality for finding specific coins",
        "Detailed coin pages with statistics and supply data",
        "Interactive historical price charts with time filters",
        "Market cap, volume, and price change tracking",
        "Expandable exchange-style view with descriptions",
        "Responsive design across all devices",
        "Routing between cryptocurrencies, exchanges, and news sections",
      ],

      tech: [
        "React.js",
        "Redux Toolkit",
        "RTK Query",
        "React Router",
        "Ant Design",
        "Chart visualization (Line charts)",
        "millify",
        "HTML React Parser",
        "Crypto API integration",
      ],

      highlights: [
        "Real-time crypto data fetched from external APIs",
        "Global state management using Redux Toolkit",
        "Optimized performance using RTK Query caching",
        "Interactive price trend visualization",
        "Structured and scalable component architecture",
        "Clean UI built with Ant Design components",
        "Dynamic routing for individual crypto detail pages",
      ],
    },
  },
  {
  name: "Finance Dashboard",
  icon: "./assets/dash.png",
  description: "Web Application",
  link: "https://mui-admin-dashboard-livid.vercel.app/",
  details: {
    overview:
      "Finance Dashboard is a modern admin panel built for analytics and business monitoring. It provides interactive charts, data tables, team management tools, and geographic insights through a clean and responsive UI. The system focuses on usability, real-time visualization, and scalable component architecture.",

    features: [
      "Interactive analytics dashboard with KPIs",
      "Team management data table with access roles",
      "Contacts and invoices management pages",
      "Dynamic forms and validation system",
      "Calendar scheduling interface",
      "FAQ and documentation section",
      "Bar, Line, and Pie chart visualizations",
      "Geographic data representation with choropleth maps",
      "Dark and light mode theme switching",
      "Responsive admin layout with sidebar navigation",
    ],

    tech: [
      "React.js",
      "Material UI (MUI)",
      "Nivo Charts",
      "React Router",
      "Context API",
      "JavaScript (ES6+)",
      "CSS",
      "DataGrid (MUI X)",
    ],

    highlights: [
      "Custom dashboard layout using reusable components",
      "Advanced data visualization using Nivo chart library",
      "Theme system with dark/light mode using Context API",
      "Optimized performance with modular component structure",
      "Role-based UI representation for team members",
      "Interactive geography map with real-world data simulation",
      "Scalable architecture suitable for SaaS admin systems",
    ],
  },
}
,
  {
  name: "Apple M4 GSAP Experience",
  icon: "./assets/apple2.png", // add your preview image inside assets
  description: "Interactive 3D Product Experience",
  link: "https://apple-gsap-two.vercel.app/", // replace with your live link
  details: {
    overview:
      "Apple M4 GSAP Experience is a high-end interactive landing page inspired by Apple's product showcases. The project combines 3D rendering, scroll-driven animations, video masking techniques, and smooth transitions to create a cinematic product presentation. It focuses on performance, immersive storytelling, and modern UI engineering.",

    features: [
      "Scroll-triggered 3D MacBook animation",
      "GSAP-powered timeline animations",
      "Video mask reveal effects",
      "Dynamic product rotation using React Three Fiber",
      "Interactive feature showcase section",
      "Performance-optimized rendering",
      "Responsive layout across devices",
      "Smooth pinning and parallax effects",
    ],

    tech: [
      "React.js",
      "GSAP (ScrollTrigger)",
      "React Three Fiber",
      "Three.js",
      "Zustand (State Management)",
      "Tailwind CSS",
      "Vite",
      "Vercel Deployment",
    ],

    highlights: [
      "Implemented Apple-style cinematic scroll animations",
      "Built 3D product viewer with optimized lighting setup",
      "Integrated video masking effect synced with scroll",
      "Managed global state using Zustand",
      "Optimized performance for smooth 60fps animations",
      "Handled production deployment and environment differences",
      "Created reusable animation timeline structure",
    ],
  },
},
];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((item, index) => (
          <div
            key={item.name}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              
              {/* Title */}
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">

                {/* Open project */}
                <div className="border rounded-full border-black w-8 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src="./assets/send-icon.png" alt="Open project" className="w-5" />
                  </a>
                </div>

                {/* Info button */}
                <button
                  type="button"
                  className="border rounded-full border-black aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                  onClick={() => setSelectedWork(index)}
                >
                  <FiInfo />
                </button>
              </div>
            </div>

            {/* Popup modal */}
            {selectedWork === index && (
              <WorkDetailes
                title={item.name}
                overview={item.details?.overview}
                features={item.details?.features}
                tech={item.details?.tech}
                highlights={item.details?.highlights}
                onClose={() => setSelectedWork(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
