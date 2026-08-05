import { Mail, Phone, Github, Linkedin, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-8 py-32">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#14181D]">
        <div className="grid gap-12 p-10 md:grid-cols-[1.1fr_0.9fr] md:p-16">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              Let’s connect
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-tight text-[#F5F3EE]">
              Ready for robotics,
              <br />
              automation, and R&D
              opportunities.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#B8BCC6]">
              I’m interested in robotics, industrial automation, embedded
              systems, and engineering research opportunities. Whether it’s a
              graduate role, research collaboration, or an innovative technical
              project, I’d be happy to connect and discuss how I can contribute.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:your.email@example.com"
                className="rounded-full bg-[#8FA8C7] px-6 py-3 font-medium text-[#0F1115] transition-all duration-300 hover:scale-105"
              >
                Send an email
              </a>

              <a
                 href="/resume.pdf"
                 download
                 className="rounded-full bg-[#8FA8C7] px-6 py-3 font-medium text-[#0F1115] transition-all duration-300 hover:scale-105"
              >
                  Download Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[2rem] border border-white/10 bg-[#101317] p-8">
            <h3 className="text-2xl font-semibold text-[#F5F3EE]">
              Contact information
            </h3>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                <Mail className="h-5 w-5 text-[#8FA8C7]" />
                keros3045@gmail.com
              </a>

              <a
                href="tel:+916383048401"
                className="flex items-center gap-4 text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                <Phone className="h-5 w-5 text-[#8FA8C7]" />
                +91 63830 48401
              </a>

              <a
                href="https://github.com/Keros29-5-2005/"
                target="_blank"
                className="flex items-center gap-4 text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                <Github className="h-5 w-5 text-[#8FA8C7]" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/keros-m-7020-//"
                target="_blank"
                className="flex items-center gap-4 text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                <Linkedin className="h-5 w-5 text-[#8FA8C7]" />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                className="flex items-center gap-4 text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                <FileText className="h-5 w-5 text-[#8FA8C7]" />
                Resume (PDF)
              </a>
            </div>

            <div className="my-8 h-px bg-white/10" />

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
                Based in
              </p>
              <p className="mt-3 text-lg text-[#F5F3EE]">
                Thanjavur, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-10 py-6 md:px-16">
          <div className="flex flex-col gap-3 text-sm text-[#8FA8C7] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Keros M. All rights reserved.</p>
            <p>Designed as an engineering portfolio focused on robotics,
              research, and automation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}