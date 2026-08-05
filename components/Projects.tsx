import Image from 'next/image'

const projects = [
  {
    title: 'Maze Solver Robot',
    period: 'TECHNOXIAN Robotics Championship',
    image: '/competitions/maze-robot.jpg',
    description:
      'Autonomous maze navigation robot developed for the TECHNOXIAN World Robotics Championship using sensor-based path detection and embedded control logic.',
    technologies: ['Embedded Systems', 'Sensors', 'Autonomous Navigation'],
  },
  {
    title: 'Line Follower Robot',
    period: 'Embedded Robotics Project',
    image: '/projects/line-follower.jpg',
    description:
      'Autonomous line tracking robot designed with sensor-based navigation and motor control algorithms for reliable path following.',
    technologies: ['Embedded C', 'IR Sensors', 'Motor Control'],
  },
  {
    title: 'IoT Plant Monitoring System',
    period: 'IoT and Automation',
    image: '/projects/iot-plant.jpg',
    description:
      'Smart monitoring system for plant health using environmental sensors and IoT-based data collection.',
    technologies: ['ESP32', 'IoT', 'Sensors'],
  },
  {
    title: 'Traffic Light PLC Project',
    period: 'Industrial Automation',
    image: '/projects/plc-traffic.jpg',
    description:
      'Programmable Logic Controller implementation for traffic signal sequencing and industrial automation logic development.',
    technologies: ['PLC', 'Automation', 'Control Systems'],
  },
  {
    title: 'Humanoid Robot',
    period: 'Robotics Prototype',
    image: '/projects/humanoid.jpg',
    description:
      'Prototype humanoid robot focused on actuator integration, structural design, and embedded motion control concepts.',
    technologies: ['Robotics', 'Embedded Systems', 'Actuators'],
  },
  {
    title: 'Website Creation Project',
    period: 'Web Development',
    image: '/projects/web-project.jpg',
    description:
      'Responsive web interface developed with a focus on user experience, clean design, and modern front-end implementation.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
      <div className="mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Selected engineering projects
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-[#F5F3EE] md:text-6xl">
          Engineering archive
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8BCC6] md:text-lg">
          A collection of robotics, embedded systems, automation, IoT, and web
          engineering projects completed during my academic and technical
          development journey.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D] transition-all duration-300 hover:-translate-y-1 hover:border-[#8FA8C7]/30"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={600}
              className="gallery-image"
            />

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8FA8C7]">
                {project.period}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#F5F3EE]">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B8BCC6]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#C9C2B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

