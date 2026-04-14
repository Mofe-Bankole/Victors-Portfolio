export default function Projects() {
  const projects = [
    {
      image:
        "https://pbs.twimg.com/media/HDoh6hqWoAABdEJ?format=jpg&name=medium",
      summary: "Flier for a developer client",
      link: "https://x.com/Tofunmi_Ololuo/status/2033975489744838916/photo/1",
    },
    {
      image:
        "https://pbs.twimg.com/media/HDoh6s4XMAE_UFU?format=jpg&name=large",
      summary: "Poster for NBA Superstar Nikola Jokic",
      link: "https://x.com/Tofunmi_Ololuo/status/2033975489744838916/photo/1",
    },
    {
      image:
        "https://pbs.twimg.com/media/HDoh6wzXwAASOq1?format=jpg&name=large",
      summary: "Flier for a developer client",
      link: "https://x.com/Tofunmi_Ololuo/status/2033975489744838916/photo/1",
    },
    {
      image:
        "https://pbs.twimg.com/media/G1Om2i2WQAA1STt?format=jpg&name=medium",
      summary: "Flier for a developer client",
      link: "https://x.com/Tofunmi_Ololuo/status/2033975489744838916/photo/1",
    },
    {
      image:
        "https://pbs.twimg.com/media/G0RLaQlW0AAwDxy?format=jpg&name=medium",
      summary: "Design Campaign for the DLHS Logistics Company",
      link: "https://www.behance.net/gallery/241717699/DLHS-Logistics-(Brand-Communication-Campaign-Design)",
    },
    { image: "https://pbs.twimg.com/media/G1OpT13WoAE8ZzS?format=jpg&name=medium", summary: "Mbappe Inspired Poster", link: "https://x.com/Tofunmi_Ololuo/status/1969103639269544401/photo/2" },
    { image: "", summary: "", link: "" },
    { image: "", summary: "", link: "" },
  ];
  return (
    <div className="w-full text-black mt-16">
      <h1 className="text-5xl font-extrabold text-center mb-10">Projects</h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Explore some of my featured works and collaborations below.
      </p>
      <div className="md:flex md:flex-row flex-col justify-center space-x-6 space-y-8 flex-wrap w-[90%] mx-auto">
        {projects.map((project, idx) =>
          project.image && project.summary && project.link ? (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
              style={{ maxWidth: 550, width: "100%" }}
            >
              <img
                src={project.image}
                alt={project.summary}
                className="object-cover w-full h-[600px] transition-all duration-300 ease-in-out group-hover:grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center px-6 py-3 text-base leading-snug max-w-xs rounded-md bg-black/60">
                  {project.summary}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                <span className="mr-2 text-white font-semibold drop-shadow">
                  View Original
                </span>
                <svg
                  className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ) : null,
        )}
      </div>
    </div>
  );
}
