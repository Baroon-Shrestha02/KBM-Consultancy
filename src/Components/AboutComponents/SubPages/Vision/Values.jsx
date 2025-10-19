import React from "react";

export default function Values() {
  return (
    <section className="mx-6 bg-yellow-100 h-[90vh] flex items-center">
      <div className="container mx-auto p-6 md:p-10 h-full">
        {/* Use grid to divide height equally among 3 rows */}
        <div className="grid grid-rows-3 h-full gap-4">
          {/* (01) and Heading */}
          <div className="flex items-center justify-between">
            <div className="text-4xl md:text-7xl font-extralight italic">
              (03)
            </div>
            <div className="text-5xl md:text-8xl font-extrabold">
              Our Values
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center text-center px-4">
            <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
              At KBM Education Consultancy, our core values guide every decision
              and interaction. We are committed to integrity, transparency, and
              honesty, ensuring students receive accurate and reliable guidance
              throughout their study abroad journey. Excellence drives us to
              provide top-quality mentorship, personalized counseling, and
              practical solutions that empower students to achieve their
              academic and career goals. We value empathy and respect, fostering
              a supportive environment where every student feels heard and
              encouraged. Collaboration, innovation, and continuous learning are
              central to our approach, enabling us to adapt to changing global
              education trends while maintaining our dedication to student
              success and holistic development.
            </p>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <img
              src="/Uploads/about/vision.jpg"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
