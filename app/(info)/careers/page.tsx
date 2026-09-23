export default function CareersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--text-primary)]">Careers at SuperCommerce</h1>
        <p className="text-[var(--text-muted)] mt-2">Help us build the future of commerce</p>
      </div>
      <div className="glass rounded-2xl p-6 space-y-3">
        <p className="text-[var(--text-secondary)] leading-relaxed">
          We&apos;re a fast-growing team passionate about building the most secure and delightful shopping experience. We value ownership, curiosity, and impact.
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--text-primary)]">Open Roles</h2>
        {[
          { role: "Senior Full-Stack Engineer", team: "Engineering", location: "Bangalore / Remote" },
          { role: "Product Designer", team: "Design", location: "Bangalore" },
          { role: "Growth Marketing Manager", team: "Marketing", location: "Mumbai / Remote" },
          { role: "Customer Experience Lead", team: "Support", location: "Hyderabad" },
        ].map((job) => (
          <div key={job.role} className="glass rounded-2xl p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold text-[var(--text-primary)]">{job.role}</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{job.team} · {job.location}</p>
            </div>
            <button className="btn-ghost px-4 py-1.5 rounded-full text-xs font-semibold">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
