type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-purple-300">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl font-bold md:text-5xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {subtitle}
          </p>
        )}

        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}