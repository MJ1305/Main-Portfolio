

function Experience(){
  return (
    <section id="experience" className="card">
      <h3 className="text-xl font-semibold mb-2">Experience</h3>
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Front-End Developer Intern — Sforger (Poland)</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Remote | 2025 – Present</div>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Collaborate with a distributed tech team to design and build websites for client businesses.</li>
            <li>Implement responsive layouts and reusable components using React and Tailwind CSS.</li>
            <li>Work closely with UI/UX teams to refine user interfaces and improve performance.</li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Front-End Trainee — Zulfah Group (Nigeria)</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">On-site | May 2023 – November 2023</div>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Completed a 6-month intensive training program focused on the fundamentals of web development.</li>
            <li>Learned and practiced front-end technologies including HTML, CSS, and JavaScript.</li>
            <li>Contributed to internal projects to strengthen understanding of responsive design and UI structure.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience