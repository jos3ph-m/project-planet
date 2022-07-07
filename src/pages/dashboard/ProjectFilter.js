const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter() {
  return (
    <div className="project-filter">
      <nav>
        {filterList.map((f) => (
          <button key={f}>{f}</button>
        ))}
      </nav>
    </div>
  );
}
