'use client'

import { Mail, Phone, MapPin, FileText, Linkedin, Github } from 'lucide-react'

export default function Contact() {
return ( <section
   id="contact"
   className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
 > <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#14181D] p-6 md:p-10"> <div className="max-w-4xl"> <p className="text-[11px] uppercase tracking-[0.3em] text-[#8FA8C7] md:text-sm">
Let's connect </p>

      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#F5F3EE] md:text-6xl lg:text-7xl">
        Ready for robotics,
        <br className="hidden md:block" />
        automation, and R&D opportunities
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-8 text-[#B8BCC6] md:text-lg">
        I'm interested in robotics, embedded systems, industrial
        automation, and research-driven engineering projects. If you'd
        like to discuss opportunities, collaborations, or technical work,
        feel free to get in touch.
      </p>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#8FA8C7]/10 p-3">
            <Mail className="h-5 w-5 text-[#8FA8C7]" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7]">
              Email
            </p>
            <a
              href="mailto:keros3045@gmail.com"
              className="mt-2 block break-all text-lg text-[#F5F3EE] transition-colors hover:text-white"
            >
              keros3045@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#8FA8C7]/10 p-3">
            <Phone className="h-5 w-5 text-[#8FA8C7]" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7]">
              Phone
            </p>
            <a
              href="tel:+916383048401"
              className="mt-2 block text-lg text-[#F5F3EE] transition-colors hover:text-white"
            >
              +91 6383048401
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#8FA8C7]/10 p-3">
            <MapPin className="h-5 w-5 text-[#8FA8C7]" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7]">
              Location
            </p>
            <p className="mt-2 text-lg text-[#F5F3EE]">
              Thanjavur, Tamil Nadu
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-[#8FA8C7]/10 p-3">
            <FileText className="h-5 w-5 text-[#8FA8C7]" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#8FA8C7]">
              Research
            </p>
            <p className="mt-2 text-lg text-[#F5F3EE]">
              EPJ Publication
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href="mailto:keros3045@gmail.com"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8FA8C7] px-6 py-4 text-center text-lg font-medium text-[#0F1115] transition-all hover:scale-[1.02] sm:w-auto"
      >
        <Mail size={18} />
        Send an email
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-lg font-medium text-[#F5F3EE] transition-all hover:border-white/30 hover:bg-white/10 sm:w-auto"
      >
        <FileText size={18} />
        Download resume
      </a>
    </div>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href="https://github.com/Keros29-5-2005"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#F5F3EE] transition hover:border-[#8FA8C7]/40 hover:bg-white/10"
      >
        <Github size={16} />
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/keros-m-7020"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#F5F3EE] transition hover:border-[#8FA8C7]/40 hover:bg-white/10"
      >
        <Linkedin size={16} />
        LinkedIn
      </a>
    </div>
  </div>
</section>


)
}
