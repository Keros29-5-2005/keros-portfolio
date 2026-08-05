import Image from 'next/image'

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Research & publication
        </p>
        <h2 className="mt-4 text-5xl font-semibold">
          Engineering research publication
        </h2>
      </div>

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D]">
          <Image
            src="/research/epj-cover.jpg"
            alt="EPJ Web of Conferences"
            width={700}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
            Published research
          </p>

          <h3 className="mt-4 text-4xl font-semibold leading-tight">
            Design and Fabrication of a Bio-Inspired Water Strider Robot
          </h3>

          <p className="mt-8 text-lg leading-relaxed text-[#B8BCC6]">
            This publication documents the complete engineering process behind
            the development of the bio-inspired water strider robot, including
            propulsion mechanism evaluation, structural optimization, prototype
            fabrication, and experimental water-surface locomotion testing.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Journal
              </p>
              <p className="mt-2 text-xl font-semibold">
                EPJ Web of Conferences
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Conference
              </p>
              <p className="mt-2 text-xl font-semibold">
                RIACT 2026
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-[#14181D] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
              Research contribution
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[#B8BCC6]">
              The research investigated multiple propulsion mechanisms,
              including ionic thrust, electro ribbon, bubble propulsion,
              propeller propulsion, and vibration-based locomotion, ultimately
              identifying vibration propulsion as the most effective solution
              for stable water-surface movement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]">
                Biomimetics
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]">
                Robotics
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]">
                Surface Tension
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#B8BCC6]">
                Experimental Design
              </span>
            </div>
          </div>

          <div className="mt-10 flex gap-6">
            <a
              href="#"
              className="border-b border-[#8FA8C7] pb-1 text-[#8FA8C7]"
            >
              View publication
            </a>

            <a
              href="#"
              className="border-b border-[#8FA8C7] pb-1 text-[#8FA8C7]"
            >
              DOI
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}