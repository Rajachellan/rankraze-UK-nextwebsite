import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CSR Activities - Rankraze",
    description: "Explore our CSR activities focused on community support, sustainability, and making a meaningful impact beyond business.",
    
    keywords: [
      
    ],
        
    alternates: {
        canonical: "https://rankraze.us/csr-activities",
    },

    openGraph: {
        title: "CSR Activities - Rankraze",
        description: "Explore our CSR activities focused on community support, sustainability, and making a meaningful impact beyond business.",
        url: "https://rankraze.us/csr-activities",
        siteName: "Rankraze",
        images: [
        {
            url: "upload/case-study-4.webp",
            width: 500,
            height: 600,
            alt: "irqs-group.webp",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
};

export default function CsrActivitiesPage() {
  return (
    <>
      {/* Section 1 - Header */}
      <section className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[var(--primary-green)]">
          Careers
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Join our talented team and grow with Rankraze — a place where passion meets creativity!
        </p>
      </section>

      {/* Section 2 - Benefits */}
      <section className="container mx-auto py-10 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h6 className="text-[var(--primary-green)] font-semibold uppercase mb-2">
              Our Benefits
            </h6>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Agency Has Been Present For Over 10 Years In Digital Marketing!
            </h2>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Our business is growing, and we are looking to expand our team with people who are just as
              passionate as we are in shaping our clients’ digital future. A fun and welcoming culture
              is a priority at Rankraze.
            </p>
            <div className="grid grid-cols-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
              <div>Award Winning</div>
              <div>Networking</div>
              <div>Hands-on Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Open Positions */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--primary-green)]">
          Join Our Team!
        </h2>

        <div className="space-y-10">
          {/* Job 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Camera Operator & Video Editor
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We are seeking a talented and creative Camera Operator & Video Editor to join our team.
              The ideal candidate should have hands-on experience in camera handling, video editing, and
              photography, with a keen eye for detail and visual storytelling. Proficiency in Adobe
              Premiere Pro, After Effects, Photoshop, and Lightroom is required.
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              💼 Salary: ₹15,000–₹20,000 per month | Open to freshers and experienced.
            </p>
          </div>

          {/* Job 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Sales Executive</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Generate leads, pitch services, and close deals.</li>
                <li>Conduct market analysis and maintain client relationships.</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Business Development Manager</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Identify and pursue strategic partnerships and growth opportunities.</li>
                <li>Develop and maintain relationships with clients and ensure satisfaction.</li>
              </ul>
            </div>
          </div>

          {/* Job 4 & 5 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Digital Marketing Executive</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Execute digital campaigns and analyze performance metrics.</li>
                <li>Create compelling content and manage social media platforms.</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">Motion Graphic Designer</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Create visually compelling animations and motion graphics.</li>
                <li>Collaborate with teams to produce creative digital assets.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Application Form */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--primary-green)]">
              Find your next career in the world of Digital Marketing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Fill out the form and we’ll get back to you if you’re a good fit for one of our openings!
            </p>
          </div>

          <form
            action="#"
            method="POST"
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block font-medium mb-1">
                Mobile No
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                required
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)]"
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--primary-green)] text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
