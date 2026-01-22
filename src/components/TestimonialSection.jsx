import React from 'react';
import { Star, User } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Chen",
      role: "Marketing Analyst",
      initials: "SC",
      text: "From SQL Newbie To Data Querying Pro In 48 Hours - Thanks To 10x Data Analyst Bootcamp! I Never Thought I'd Be So Excited About Data Analysis! The Hands-On Approach To Tackling Real Business Cases Made The Learning Experience Incredibly Engaging. Huge Shoutout To The Instructors For Their Patience And Expertise!"
    },
    {
      id: 2,
      name: "James Wheeler",
      role: "Financial Advisor",
      initials: "JW",
      text: "Just Completed The Intensive 1to10x Data Analytics Bootcamp, And I'm Thoroughly Impressed! 💼 The Course Expertly Balanced Theory With Practical Application, Which Is Crucial In The Finance Sector. Learning To Use Octoparse For Web Scraping Financial Data Was An Unexpected Highlight - It's Opened Up New Possibilities For Market Research.\n\nThe Sections On Data Modeling For Customer Segmentation Will Undoubtedly Enhance Our Client Targeting Strategies. Kudos To The 1to10x Team For A Well-Structured And Insightful Program!\n\n#FinTech #DataDrivenFinance #1to10x"
    },
    {
      id: 3,
      name: "Thomas O'Brien",
      role: "Product Manager",
      initials: "TO",
      text: "Just Wrapped Up The Mind-Blowing 1to10x Data Analytics Bootcamp! 🚀 This 2-Day Intensive Course Was Exactly What I Needed To Kickstart My Journey Into Data Science. The Session On Using GPT For Google Sheets Was A Game-Changer - I Can Already See How It'll Streamline Our Reporting Processes. Big Shout Out To Ankit And His Team!"
    },
    {
      id: 4,
      name: "Rudy Rolland",
      role: "Energy Technician",
      initials: "RR",
      text: "I Recently Attended The 10x Bootcamp To Improve My Data Analysis Skills For Our Solar Energy Projects. The Sessions On Analyzing Weather Patterns For Energy Production Were Directly Applicable To My Work. I Found The Programming Parts Challenging, But The Hands-On Exercises Were Very Helpful!"
    },
    {
      id: 5,
      name: "Jake Thompson",
      role: "Cafe Owner",
      initials: "JT",
      text: "Attended The 10x Data Analyst Course. Pretty Intense 2 Days! As A Small Cafe Owner, I Was Looking For Ways To Understand My Sales Data Better. The Module On Visualization Helped Me Create A Dashboard To Track Peak Hours And Inventory. Highly Recommended For Small Business Owners."
    },
    {
      id: 6,
      name: "Devanshu Thakkar",
      role: "Data Analyst",
      initials: "DT",
      text: "I Had An Amazing Experience With One To 10x Team Organized Bootcamp For Data Analyst Learning. The Educators Are Well Expertise And Well Known In The Industry. Learn All The Core Concepts And Some Tricks To Reach Out To The Problem Solutions."
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            AI Skills = Bigger Paychecks & Job Security – <span className="text-blue-600">Hear From Previous Attendees</span>
          </h2>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((review) => (
            <div 
              key={review.id} 
              className="break-inside-avoid bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              
              {/* User Header */}
              <div className="flex items-center gap-4">
                {/* Avatar / Initials */}
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.initials}
                </div>
                
                {/* Name & Role */}
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Divider Line */}
              <hr className="border-slate-100" />

              {/* Review Text */}
              <div className="text-slate-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                {review.text}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;