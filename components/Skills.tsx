import Section from './Section'

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'AI & Data',
    skills: ['Machine Learning', 'Data Analysis'],
  },
  {
    title: 'Embedded & Electronics',
    skills: ['Embedded Systems', 'Arduino', 'ESP32'],
  },
  {
    title: 'Robotics',
    skills: ['Robotics', 'Sensors', 'Prototyping'],
  },
]

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical stack"
      title="Technologies I build with."
      subtitle="A practical engineering toolkit spanning software, embedded systems, robotics, and databases."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold">{group.title}</h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-purple-400 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}