import React from "react";

export default function Mission() {
  return (
    <section className="mx-6 bg-green-100 h-[90vh] flex items-center">
      <div className="container mx-auto p-6 md:p-10 h-full">
        {/* Use grid to divide height equally among 3 rows */}
        <div className="grid grid-rows-3 h-full gap-4">
          {/* (01) and Heading */}
          <div className="flex items-center justify-between">
            <div className="text-4xl md:text-7xl font-extralight italic">
              (02)
            </div>
            <div className="text-5xl md:text-8xl font-extrabold">
              Our Mission
            </div>
          </div>

          {/* Description */}
          <div className="flex items-center justify-center text-center px-4">
            <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
              Our mission at KBM Education Consultancy is to guide students in
              realizing their academic and professional dreams with clarity,
              confidence, and personalized support. We are committed to
              providing accurate information, transparent processes, and
              practical advice throughout every step of the study abroad
              journey—from selecting the right courses and universities to visa
              preparation and post-arrival guidance. By fostering a supportive
              environment, we aim to empower students to make informed
              decisions, overcome challenges, and embrace global opportunities.
              Through mentorship, expertise, and dedication, our goal is to help
              each student unlock their full potential, achieve success in their
              chosen destination, and grow both academically and personally.
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
