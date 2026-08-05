const toolkit = [
  {
    title: 'Robotics',
    description:
      'Biomimetic systems, autonomous navigation, robot prototyping, and experimental robotics development.',
    items: ['Water Strider Robot', 'Maze Solver Robot', 'Humanoid Robot'],
  },
  {
    title: 'Embedded systems',
    description:
      'Microcontroller programming, sensor integration, IoT implementation, and hardware interfacing.',
    items: ['ESP32', 'Arduino', 'Sensors', 'IoT Systems'],
  },
  {
    title: 'Industrial automation',
    description:
      'Industrial control systems, PLC programming, and automation workflow implementation.',
    items: ['PLC', 'Ladder Logic', 'Control Systems', 'Automation'],
  },
  {
    title: 'Programming',
    description:
      'Software development for embedded applications, automation, data analysis, and engineering tools.',
    items: ['Python', 'C', 'C++', 'Java'],
  },
  {
    title: 'Database & SQL',
    description:
      'Practical SQL querying, relational database operations, joins, aggregation, and structured data handling.',
    items: ['MySQL', 'SQL', 'Joins', 'Query Optimization'],
  },
  {
    title: 'Engineering design',
    description:
      'CAD modeling, technical documentation, research writing, and engineering experimentation.',
    items: ['CAD', 'Documentation', 'Research', 'Testing'],
  },
]

export default function Toolkit() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
          Engineering toolkit
        </p>
        <h2 className="mt-4 text-5xl font-semibold">
          Technical foundations
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-[#B8BCC6]">
          The technologies, tools, and engineering disciplines that support my
          work across robotics, automation, embedded systems, and research.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {toolkit.map((category) => (
          <div
            key={category.title}
            className="rounded-[1.75rem] border border-white/10 bg-[#14181D] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#8FA8C7]/40"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FA8C7]">
              {category.title}
            </p>

            <p className="mt-5 leading-relaxed text-[#B8BCC6]">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-[#B8BCC6]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-white/10 bg-[#14181D] p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8FA8C7]">
              SQL practice
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Database and query development
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#B8BCC6]">
              Completed structured MySQL learning exercises involving joins,
              subqueries, grouping, aggregation, filtering, and relational
              database operations. The work focused on developing practical SQL
              problem-solving skills and understanding relational database
              concepts.
            </p>
          </div>

          <div className="flex items-center">
            <a
              href="https://github.com/Keros29-5-2005/Database_-SQL-/blob/main/sql_test(Hospital_Managment)_28-07-2026%407020.sql"
              target="_blank"
              className="rounded-full border border-[#8FA8C7]/30 px-6 py-3 text-[#8FA8C7] transition-all duration-300 hover:border-[#8FA8C7] hover:bg-[#8FA8C7]/10"
            >
              View SQL repository
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}