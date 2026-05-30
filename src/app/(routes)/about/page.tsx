import { FC } from 'react';

const tools = [
  {
    name: "QR Generator",
    description: "Generate QR codes for any URL instantly with high error-correction support.",
    href: "/qr-generator",
    available: true,
  },
  {
    name: "ConcreteHelper",
    description: "Calculate concrete mix ratios and material quantities for construction projects.",
    href: "/",
    available: false,
  },
  {
    name: "ImageCropper",
    description: "Crop, resize and export images right in your browser without any uploads.",
    href: "/",
    available: false,
  },
];

const page: FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10 flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          About <span className="text-blue-600">QRaw</span>
        </h2>
        <p className="text-neutral-500 leading-relaxed">
          QRaw is a lightweight collection of everyday digital tools — no accounts, no ads, no tracking.
          Just fast, focused utilities that work.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-gray-800 tracking-tight">Tools</h3>
        <div className="flex flex-col gap-3">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-start justify-between gap-4 p-4 rounded-xl border border-neutral-100 bg-white shadow-sm"
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-800 text-sm">{tool.name}</span>
                <p className="text-neutral-500 text-sm">{tool.description}</p>
              </div>
              <span
                className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                  tool.available
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-neutral-100 text-neutral-400 border border-neutral-200"
                }`}
              >
                {tool.available ? "Available" : "Coming soon"}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-4 pb-4">
        <h3 className="text-lg font-semibold text-gray-800 tracking-tight">Built with</h3>
        <div className="flex flex-wrap gap-2">
          {["Next.js 15", "React 19", "Tailwind CSS v4", "Redux Toolkit", "TypeScript"].map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
