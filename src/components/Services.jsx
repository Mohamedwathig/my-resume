import { MdOutlinePsychology } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { BsSpeedometer2 } from "react-icons/bs";
export default function Services() {
    const services = [
  {
    name: 'Frontend Development',
    icon: AiOutlineCode,
    description:
      'Building modern, responsive, and high-performance web interfaces with a strong focus on user experience and clean code.',
    link: '#',
  },
  {
    name: 'AI & Machine Learning',
    icon: MdOutlinePsychology,
    description:
      'Designing and implementing Machine Learning and AI solutions that add intelligence, automation, and data-driven insights.',
    link: '#',
  },
  {
    name: 'AI-Powered Web Applications',
    icon: HiOutlineCpuChip,
    description:
      'Integrating AI models into web applications, including dashboards, prediction systems, and smart user interactions.',
    link: '#',
  },
  {
    name: 'Performance & SEO Optimization',
    icon: BsSpeedometer2,
    description:
      'Optimizing websites for speed, scalability, and search engine visibility to improve performance and engagement.',
    link: '#',
  },
];
return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
  <div
    key={service.name}
    className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12
    hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1
    duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
  >
    <service.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />

    <h3 className="text-lg my-4 text-gray-700 dark:text-white">
      {service.name}
    </h3>

    <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
      {service.description}
    </p>

    {/* <a
      href={service.link}
      className="flex items-center gap-2 text-sm mt-5"
    >
      Read more
      <img src="./assets/right-arrow.png" alt="" className="w-4" />
    </a> */}
  </div>
))}
            </div>
        </div>
    )
}