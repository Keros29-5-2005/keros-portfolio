import Image from 'next/image'
import { Github, Linkedin, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        {/* Profile card */}
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D] p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="rounded-full border border-[#8FA8C7]/30 bg-[#8FA8C7]/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-xs">
                Engineering Profile
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-[#8FA8C7]" />
            </div>

            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src="/profile.jpg"
                alt="Keros M."
                width={900}
                height={1125}
                className="portrait-image grayscale transition-transform duration-500 hover:scale-[1.03]"
                priority
              />
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-[#F5F3EE] md:text-3xl">
                Keros M.
              </h3>
              <p className="mt-2 text-sm text-[#C9C2B8] md:text-base">
                Electronics & Communication Engineer
              </p>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8FA8C7]">Focus</span>
                <span className="text-right text-sm text-[#F5F3EE]">
                  Robotics & Embedded Systems
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8FA8C7]">Projects</span>
                <span className="text-sm text-[#F5F3EE]">6+ Completed</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8FA8C7]">Research</span>
                <span className="text-sm text-[#F5F3EE]">EPJ Publication</span>
              </div>
            </div>

            <div className="my-6 h-px bg-white/10" />

            <div className="flex flex-wrap gap-2">
              {['Robotics', 'Embedded', 'Automation', 'Research'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C9C2B8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8FA8C7]/10 blur-3xl" />
          </div>
        </div>

        {/* Left content */}
        <div className="order-2 lg:order-1">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px w-12 bg-[#8FA8C7]/50 md:w-16" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8FA8C7] md:text-sm">
              Engineering Portfolio
            </p>
          </div>

          <h1 className="text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#F5F3EE] sm:text-6xl md:text-7xl xl:text-[7.5rem]">
            KEROS
            <br />
            M.
          </h1>

          <h2 className="mt-5 text-xl font-medium text-[#F5F3EE] md:mt-6 md:text-3xl">
            Electronics & Communication Engineer
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#B8BCC6] md:mt-6 md:text-lg">
            I build robotics, automation, and embedded engineering systems through
            experimentation, research, and real-world implementation. My work focuses
            on intelligent mechanical design, control systems, and practical
            engineering innovation.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://github.com/Keros29-5-2005"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[#F5F3EE] transition-all hover:border-[#8FA8C7]/40 hover:bg-white/10 sm:w-auto"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/keros-m-7020"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[#F5F3EE] transition-all hover:border-[#8FA8C7]/40 hover:bg-white/10 sm:w-auto"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8FA8C7] px-5 py-3 font-medium text-[#0F1115] transition-all hover:scale-[1.02] sm:w-auto"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>

          {/* Contact card */}
          <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-[#14181D] p-5 md:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-xs">
                  Email
                </p>
                <p className="mt-2 break-all text-[#F5F3EE]">
                  keros3045@gmail.com
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-xs">
                  Phone
                </p>
                <p className="mt-2 text-[#F5F3EE]">
                  +91 6383048401
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-xs">
                  Location
                </p>
                <p className="mt-2 text-[#F5F3EE]">
                  Thanjavur, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7] md:text-xs">
                  Research
                </p>
                <p className="mt-2 text-[#F5F3EE]">
                  EPJ Publication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

