export default function JobPositions() {
  const jobs = [
    {
      id: 1,
      initials: 'SD',
      bgColor: 'bg-red-500',
      badge: 'Full Time',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      title: 'Senior Graphic Designer',
      location: 'San Francisco, US'
    },
    {
      id: 2,
      initials: 'UX',
      bgColor: 'bg-green-500',
      badge: 'Remote',
      badgeBg: 'bg-cyan-100',
      badgeText: 'text-cyan-600',
      title: 'UI/UX Designer',
      location: 'Anywhere'
    },
    {
      id: 3,
      initials: 'AN',
      bgColor: 'bg-yellow-500',
      badge: 'Full Time',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      title: 'Multimedia Artist & Animator',
      location: 'Birmingham, UK'
    },
    {
      id: 4,
      initials: 'FD',
      bgColor: 'bg-purple-500',
      badge: 'Part Time',
      badgeBg: 'bg-violet-100',
      badgeText: 'text-violet-600',
      title: 'Front End Developer',
      location: 'Sydney, AU'
    },
    {
      id: 5,
      initials: 'MD',
      bgColor: 'bg-orange-500',
      badge: 'Full Time',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      title: 'Mobile Developer',
      location: 'San Francisco, US'
    },
    {
      id: 6,
      initials: 'ND',
      bgColor: 'bg-pink-500',
      badge: 'Full Time',
      badgeBg: 'bg-blue-100',
      badgeText: 'text-blue-600',
      title: '.NET Developer',
      location: 'Manchester, UK'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold uppercase text-blue-600 mb-3 tracking-wider">
              Job Positions
            </h2>
            <h3 className=" text-2xl md:text-3xl font-bold mb-10 px-4 md:px-16">
              We're always searching for amazing people to join our team. Take a look at our current openings.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <a
              key={job.id}
              href="#"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform h-full"
            >
              <div className="p-6 flex items-start gap-4">
                <div>
                  <span className={`${job.bgColor} text-white w-14 h-14 flex items-center justify-center rounded-full text-xl font-semibold`}>
                    {job.initials}
                  </span>
                </div>
                <div className="flex-1">
                  <span className={`${job.badgeBg} ${job.badgeText} px-3 py-1 rounded-full text-sm font-medium inline-block mb-2`}>
                    {job.badge}
                  </span>
                  <h4 className="text-xl font-bold mb-1">
                    {job.title}
                  </h4>
                  <p className="text-gray-600 mb-0">
                    {job.location}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Can't find the right position?
            </h2>
            <p className="text-lg text-gray-600 mb-6 px-4 md:px-12">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}