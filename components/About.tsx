export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 py-32">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            About
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-tight">
            I build engineering systems that move from concept to reality.
          </h2>
        </div>

        <div className="space-y-8 text-lg leading-relaxed text-[#B8BCC6]">
          <p>
            I am an Electronics and Communication Engineering graduate with a
            strong interest in robotics, industrial automation, embedded
            systems, and engineering research. My work is driven by curiosity,
            experimentation, and the process of turning technical ideas into
            working prototypes.
          </p>

          <p>
            My experience spans biomimetic robotics, autonomous navigation,
            PLC-based automation, IoT systems, and mechanical design. I enjoy
            solving engineering problems through iterative design, experimental
            validation, and technical documentation.
          </p>

          <p>
            The most significant project in my portfolio is the Bio-Inspired
            Water Strider Robot, which evolved from a research concept into a
            fabricated prototype, a published engineering paper, and an ongoing
            patent development process.
          </p>

          <div className="grid gap-6 pt-8 md:grid-cols-2">
            <div className="border-l border-[#8FA8C7] pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Core Focus
              </p>
              <p className="mt-3 text-[#F5F3EE]">
                Robotics & Automation
              </p>
            </div>

            <div className="border-l border-[#8FA8C7] pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Engineering
              </p>
              <p className="mt-3 text-[#F5F3EE]">
                Embedded Systems & Control
              </p>
            </div>

            <div className="border-l border-[#8FA8C7] pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Research
              </p>
              <p className="mt-3 text-[#F5F3EE]">
                Experimental Engineering
              </p>
            </div>

            <div className="border-l border-[#8FA8C7] pl-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Current Goal
              </p>
              <p className="mt-3 text-[#F5F3EE]">
                Robotics & R&D Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}