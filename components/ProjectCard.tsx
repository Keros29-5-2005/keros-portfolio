import Image from 'next/image'

type Project = {
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/7">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="mt-4 text-white/70 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center text-purple-300">
          View project
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </div>
  )
}