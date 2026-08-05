import Image from 'next/image'

const achievements = [
  {
    title: 'TECHNOXIAN World Robotics Championship 9.0',
    category: 'International Robotics Competition',
    image: '/certificates/technoxian.jpg',
  },
  {
    title: 'Robert Bosch Industrial Training',
    category: 'Industrial Automation & PLC',
    image: '/certificates/bosch.jpg',
  },
  {
    title: 'Prag Robotics Training',
    category: 'Robotics & Embedded Systems',
    image: '/certificates/prag.jpg',
  },
  {
    title: 'TANCAM Technical Training',
    category: 'Engineering & Manufacturing',
    image: '/certificates/tancam.jpg',
  },
  {
    title: 'EPJ Research Publication',
    category: 'Research & Academic Contribution',
    image: '/certificates/epj.jpg',
  },
]

export default function Achievements() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Achievements
        </p>
        <h2 className="mt-4 text-5xl font-semibold">
          Certifications & professional recognition
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14181D] transition-all duration-300 hover:-translate-y-1 hover:border-[#8FA8C7]/40"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={700}
              height={900}
              className="h-[320px] w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                {item.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] border border-white/10 bg-[#14181D] p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Engineering profile
        </p>

        <h3 className="mt-4 text-3xl font-semibold">
          Technical growth through research, industry, and competition
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-[#B8BCC6]">
          These certifications and achievements represent the combination of
          academic research, industrial training, and competitive robotics
          experience that shaped my engineering approach. They document hands-on
          learning, technical experimentation, and continuous skill development
          across robotics, automation, embedded systems, and engineering
          research.
        </p>
      </div>
    </section>
  )
}