import React from 'react';
import { Sun, Code2 } from 'lucide-react';

const CurriculumSection = () => {
  // JSON Data Source for BOTH days
  const curriculumData = [
    {
      dayLabel: "DAY 01",
      title: "Day 1: Agentic AI Foundation & AI Tools",
      imageSrc: "https://1to10x.ai/wp-content/uploads/2025/03/Group-1000007610-3-1-1.png", // Replace with actual Day 1 image
      items: [
        {
          id: 1,
          highlight: "Learn",
          text: " how to build a successful agentic AI career 6X faster using cutting-edge autonomous systems."
        },
        {
          id: 2,
          highlight: "Develop Skills",
          text: " for building autonomous decision-making systems that actual businesses need right now."
        },
        {
          id: 3,
          highlight: "Project 1:",
          text: " Create an Enterprise-Level Autonomous Agent for Business Intelligence and Workflow Automation."
        },
        {
          id: 4,
          highlight: "Project 2:",
          text: " Build Web-Interacting Agents using LLMs to scrape and analyze data from job boards."
        }
      ]
    },
    {
      dayLabel: "DAY 02",
      title: "Day 2: Advanced Multi-Agent Systems & Scaling",
      imageSrc: "https://1to10x.ai/wp-content/uploads/2025/03/Group-1000007612-1-1-1.png", // Replace with actual Day 2 image
      items: [
        {
          id: 1,
          highlight: "Master",
          text: " multi-agent orchestration to handle complex, multi-step workflows without human intervention."
        },
        {
          id: 2,
          highlight: "Automate Outreach",
          text: " by building agents that can research leads, draft emails, and schedule meetings automatically."
        },
        {
          id: 3,
          highlight: "Project 3:",
          text: " Develop a 'Sales & Support' Swarm that handles customer inquiries and closes deals 24/7."
        },
        {
          id: 4,
          highlight: "Monetization:",
          text: " The exact roadmap to packaging your new skills into a $10k/month offer for high-ticket clients."
        }
      ]
    }
  ];

  return (
    <div className="py-16 px-4 bg-slate-50 min-h-screen font-sans flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header (Optional) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Two Days of Intense Transformation
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From zero to building complex autonomous agents. Here is exactly what we will cover.
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {curriculumData.map((day, index) => (
            <CurriculumCard key={index} content={day} />
          ))}
        </div>

      </div>
    </div>
  );
};

// Reusable Card Component
const CurriculumCard = ({ content }) => {
  return (
    <div className="bg-white w-full rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
      
      {/* Image Header Section */}
      <div className="relative h-64 w-full group">
        <img 
          src={content.imageSrc} 
          alt={content.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Day Badge */}
        <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm z-10">
          <Sun className="w-4 h-4 text-blue-600" />
          <span className="text-blue-900 font-bold text-xs tracking-wider">
            {content.dayLabel}
          </span>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-extrabold text-slate-900 mb-8 leading-tight">
          {content.title}
        </h3>

        <ul className="space-y-6">
          {content.items.map((item) => (
            <li key={item.id} className="flex items-start gap-4">
              
              {/* Custom Bullet Point */}
              <div className="flex-shrink-0 mt-1.5">
                <div className="w-5 h-5 rounded-full border-[5px] border-blue-500 bg-white shadow-sm"></div>
              </div>

              {/* Text Content */}
              <p className="text-slate-600 text-base leading-relaxed">
                <span className="font-extrabold text-slate-800">
                  {item.highlight}
                </span>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CurriculumSection;