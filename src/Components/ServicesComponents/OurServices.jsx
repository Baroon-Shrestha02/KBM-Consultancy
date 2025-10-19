import React, { useState } from "react";
import {
  UserCheck,
  BookOpen,
  GraduationCap,
  Globe2,
  FileCheck,
  MessageSquare,
  PlaneTakeoff,
  Languages,
  HelpingHand,
  Trophy,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurServices() {
  const [activeService, setActiveService] = useState("consultation");
  const [openAccordion, setOpenAccordion] = useState(null);

  const services = [
    {
      id: "consultation",
      title: "1-on-1 Personalized Consultation",
      icon: UserCheck,
      content: {
        title: "Personalized Consultation",
        description:
          "We begin with a private consultation to understand your academic goals, financial situation, and preferred study destinations. This helps us design the most suitable study plan for you.",
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      },
    },
    {
      id: "course-guidance",
      title: "Course & Career Guidance",
      icon: BookOpen,
      content: {
        title: "Course & Career Guidance",
        description:
          "We help you choose the right course and career pathway that aligns with your long-term goals and aspirations, across multiple countries including Japan, Australia, UK, US, and Canada.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      },
    },
    {
      id: "test-prep",
      title: "Test Preparation Support",
      icon: GraduationCap,
      content: {
        title: "Test Preparation",
        description:
          "Guidance and resources for language tests (IELTS, TOEFL, JLPT) or other required exams to help you achieve competitive scores for university admissions abroad.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
    },
    {
      id: "university-selection",
      title: "University & Country Selection",
      icon: Globe2,
      content: {
        title: "University & Country Selection",
        description:
          "We shortlist the best universities and countries based on your budget, field of study, scholarship opportunities, and personal preferences to maximize your chances of success.",
        image:
          "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      },
    },
    {
      id: "documentation",
      title: "Documentation & Application Assistance",
      icon: FileCheck,
      content: {
        title: "Documentation & Application Assistance",
        description:
          "We assist in preparing, verifying, and submitting all necessary documents for university and visa applications, ensuring accuracy and compliance with embassy and university requirements.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
    {
      id: "interview-prep",
      title: "Visa & University Interview Prep",
      icon: MessageSquare,
      content: {
        title: "Interview Preparation",
        description:
          "We conduct mock interviews, guide you on common questions, and help you present your case confidently to embassy officials and university panels.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
    {
      id: "pre-departure",
      title: "Pre-departure Orientation",
      icon: PlaneTakeoff,
      content: {
        title: "Pre-departure Orientation",
        description:
          "We provide a comprehensive briefing on travel, accommodation, finance management, and essential do’s and don’ts for students preparing to go abroad.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
    {
      id: "cultural-training",
      title: "Cultural & Language Training",
      icon: Languages,
      content: {
        title: "Cultural & Language Training",
        description:
          "Get familiar with your destination’s culture, lifestyle, and language etiquette through engaging sessions, ensuring smooth adaptation and integration.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
    {
      id: "post-arrival",
      title: "Post-arrival Support",
      icon: HelpingHand,
      content: {
        title: "Post-arrival Support",
        description:
          "We assist with initial settlement including accommodation setup, part-time job guidance, and emergency support to ensure a smooth transition.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
    {
      id: "scholarships",
      title: "Scholarship & Financial Guidance",
      icon: Trophy,
      content: {
        title: "Scholarship Guidance",
        description:
          "We identify suitable scholarships and financial aid opportunities and guide you through the application process to ease your financial burden.",
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      },
    },
  ];

  const activeContent = services.find((s) => s.id === activeService)?.content;

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="px-6 py-16 my-16 mx-6 bg-gray-50">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Our Core Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Expert guidance to help you navigate your academic journey and achieve
          your study abroad dreams with confidence.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-[35%_65%] gap-8">
          {/* Left Side - Services Menu */}
          <div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extralight text-gray-900 mb-1">
                KBM's Services
              </h2>
              <div className="h-[2px] w-full bg-black mb-3" />
            </div>
            <div className="flex flex-col gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = activeService === service.id;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={`flex items-center justify-between px-6 py-4 rounded-lg border-2 ${
                      isActive
                        ? "bg-emerald-800 text-white border-emerald-800"
                        : "bg-white text-gray-700 border-gray-200 hover:border-emerald-600"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: isActive ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[600px] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {activeContent?.title}
                  </h3>

                  <motion.div
                    className="mb-6 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <img
                      src={activeContent?.image}
                      alt={activeContent?.title}
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>

                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {activeContent?.description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Accordion View */}
        <div className="lg:hidden">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Core Services
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openAccordion === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200"
                >
                  <motion.button
                    onClick={() => toggleAccordion(service.id)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50"
                    whileHover={{ backgroundColor: "rgba(249, 250, 251, 1)" }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-emerald-800" />
                      <span className="font-semibold text-gray-900">
                        {service.title}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {service.content.title}
                          </h3>

                          <motion.div
                            className="mb-4 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <img
                              src={service.content.image}
                              alt={service.content.title}
                              className="w-full h-64 object-cover"
                            />
                          </motion.div>

                          <motion.p
                            className="text-base text-gray-600 leading-relaxed mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.3 }}
                          >
                            {service.content.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
