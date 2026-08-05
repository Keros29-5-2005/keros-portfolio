import Image from 'next/image'

const trainings = [
  {
    company: 'Robert Bosch',
    period: 'Industrial Training',
    image: '/ipt/bosch.jpg',
    description:
      'Hands-on industrial training focused on PLC programming, industrial automation, hydraulics, pneumatics, manufacturing systems, and industrial control processes.',
    skills: ['PLC Programming', 'Hydraulics', 'Pneumatics', 'Industrial Automation'],
  },
  {
    company: 'Prag Robotics',
    period: 'Robotics & Automation',
    image: '/ipt/prag.jpg',
    description:
      'Practical exposure to robotic systems, automation integration, embedded implementation, and engineering workflows for intelligent robotic applications.',
    skills: ['Robotics', 'Embedded Systems', 'Automation', 'Control Systems'],
  },
  {
    company: 'TANCAM',
    period: 'Engineering Exposure',
    image: '/ipt/tancam.jpg',
    description:
      'Experience in reverse engineering, mechanical analysis, manufacturing processes, and technical documentation for engineering product development.',
    skills: ['Reverse Engineering', 'Mechanical Analysis', 'Manufacturing', 'Documentation'],
  },
]

export default function IPT() {
  return (
    <section id="ipt" className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Industrial experience
        </p>
        <h2 className="mt-4 text-5xl font-semibold">
          Industrial training & technical exposure
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-[#B8BCC6]">
          These training experiences strengthened my understanding of industrial
          automation, robotics, manufacturing systems, and practical engineering
          implementation.
        </p>
      </div>

      <div className="space-y-16">
        {trainings.map((item, index) => (
          <article
            key={item.company}
            className={`grid gap-10 items-center ${
              index % 2 === 0
                ? 'md:grid-cols-[1.1fr_0.9fr]'
                : 'md:grid-cols-[0.9fr_1.1fr]'
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={900}
                    height={700}
                    className="h-[380px] w-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold">
                    {item.company}
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed text-[#B8BCC6]">
                    {item.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold">
                    {item.company}
                  </h3>
                  <p className="mt-6 text-lg leading-relaxed text-[#B8BCC6]">
                    {item.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={900}
                    height={700}
                    className="h-[380px] w-full object-cover"
                  />
                </div>
              </>
            )}
          </article>
        ))}
      </div>

      <div className="mt-24 rounded-[2rem] border border-white/10 bg-[#14181D] p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Professional impact
        </p>
        <h3 className="mt-4 text-3xl font-semibold">
          Connecting industrial training with robotics engineering
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-[#B8BCC6]">
          The industrial training experiences directly influenced my approach to
          robotics and engineering design, particularly in system integration,
          automation workflows, manufacturing constraints, and technical
          documentation.
        </p>
      </div>
    </section>
  )
}