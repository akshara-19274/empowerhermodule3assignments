// src/App.jsx
export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <a href="#" className="text-xl font-semibold text-gray-900">Akshara</a>
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <li><a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero section */}
      <header id="hero" className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Build beautiful, responsive UI with Tailwind
          </h2>
          <p className="text-gray-600">
            Utility-first styles, accessible components, and smooth interactions—designed to scale from mobile to desktop.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-5 py-2 text-sm font-medium text-gray-800 transition-colors">
              Get Started
            </button>
            <button className="rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-5 py-2 text-sm font-medium text-gray-800 transition-colors">
              Learn More
            </button>
          </div>

          {/* List */}
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li className="hover:text-blue-600 transition-colors">Mobile-first responsive classes</li>
            <li className="hover:text-blue-600 transition-colors">Composable UI components</li>
            <li className="hover:text-blue-600 transition-colors">Accessible defaults and focus styles</li>
          </ul>
        </div>

        {/* Image with hover effect */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
            alt="Team collaboration"
            className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </header>

      {/* Features section */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-6">Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Fast Prototyping",
              desc: "Compose interfaces quickly with utility classes and reusable patterns.",
              img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
              btn: "Explore"
            },
            {
              title: "Design Consistency",
              desc: "Keep spacing, color, and type consistent across your app.",
              img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop",
              btn: "Docs"
            },
            {
              title: "Performance",
              desc: "Lean CSS footprint with production builds and purge strategies.",
              img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop",
              btn: "Benchmark"
            }
          ].map((card, i) => (
            <article key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <img src={card.img} alt={card.title} className="h-40 w-full object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="text-sm text-gray-600">{card.desc}</p>
                <button className="rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 text-sm font-medium text-gray-800 transition-colors">
                  {card.btn}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Showcase grid */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h3 className="text-2xl font-semibold mb-6">Showcase</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Card One","Card Two","Card Three","Card Four","Card Five","Card Six"].map((title,i)=>(
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm text-gray-600">Responsive and accessible design.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-6">Data Table</h3>
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
          <table className="min-w-full text-left">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 font-medium text-gray-700">Role</th>
                <th className="px-4 py-3 font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Akira","Designer","Active"],
                ["Leah","Developer","Pending"],
                ["Sam","PM","Active"],
                ["Isha","QA","Inactive"]
              ].map((row,i)=>(
                <tr key={i} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200">
                  {row.map((cell,j)=><td key={j} className="px-4 py-3">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">
            Fill in your details and we’ll get back to you soon.
          </p>
        </div>
        <form className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" type="text" placeholder="Your name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" type="email" placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                          <input
                id="password"
                type="password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 px-4 py-2 text-sm font-medium text-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500">
          © 2026 Your Company. Built with Tailwind.
        </footer>
      </div>
    )
}