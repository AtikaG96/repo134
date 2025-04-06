import React, { useState } from 'react';
import '../Certifications.css';
import { FaRegCalendarAlt, FaClock, FaTags, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('microsoft');
  const [activeCategory, setActiveCategory] = useState('All');

 // Microsoft Learn Certifications Data (31 modules)
const microsoftData = [
  {
    id: 1,
    title: "Explore Dynamics 365 Field Service",
    description: "Field service management capabilities in Dynamics 365",
    date: "Feb 27, 2025",
    duration: "45 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/8759B5VW?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Field Service"]
  },
  {
    id: 2,
    title: "Case study: Design security operations, identity and compliance capabilities",
    description: "Security architecture case study",
    date: "Feb 21, 2025",
    duration: "1 hr 15 min",
    category: "Security",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/3RGUCJLH?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Security", "Compliance", "Identity"]
  },
  {
    id: 3,
    title: "Microsoft Cloud for Healthcare overview",
    description: "Healthcare industry cloud solutions",
    date: "Feb 8, 2025",
    duration: "30 min",
    category: "Azure",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/74W8MVLZ?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Healthcare", "Cloud"]
  },
  {
    id: 4,
    title: "Design a dream destination using Microsoft Copilot",
    description: "Generative AI design with Copilot",
    date: "Feb 8, 2025",
    duration: "50 min",
    category: "AI",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/J9QV4Y3T?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Copilot", "Generative AI"]
  },
  {
    id: 5,
    title: "Get started building with Power BI",
    description: "Power BI fundamentals",
    date: "Feb 8, 2025",
    duration: "25 min",
    category: "Data Analytics",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/J9QV6FBT?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Power BI", "Data Visualization"]
  },
  {
    id: 6,
    title: "Explore what Power BI can do for you",
    description: "Power BI service capabilities",
    date: "Feb 8, 2025",
    duration: "1 hr",
    category: "Data Analytics",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/HALSYN38?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Power BI", "Business Intelligence"]
  },
  {
    id: 7,
    title: "Describe identity concepts",
    description: "Identity management fundamentals",
    date: "Feb 8, 2025",
    duration: "20 min",
    category: "Security",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/VDXWV2KM?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Identity", "Security"]
  },
  {
    id: 8,
    title: "Deploy a Spring Boot app to Azure App Service",
    description: "Java application deployment",
    date: "Feb 6, 2025",
    duration: "35 min",
    category: "Azure",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/WZ6ER3SN?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Azure", "Java", "Spring Boot"]
  },
  {
    id: 9,
    title: "Choose the right Azure service for Java applications",
    description: "Azure services selection guide",
    date: "Feb 6, 2025",
    duration: "28 min",
    category: "Azure",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/UYS2WAK3?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Azure", "Java"]
  },
  {
    id: 10,
    title: "Introduction to Java on Azure",
    description: "Java development on Azure",
    date: "Feb 6, 2025",
    duration: "40 min",
    category: "Azure",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/WZ6EFFFN?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Azure", "Java"]
  },
  {
    id: 11,
    title: "Design a Power Apps canvas app by using Figma",
    description: "UI design integration with Power Apps",
    date: "Feb 6, 2025",
    duration: "55 min",
    category: "Power Platform",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/4LZ9QQDK?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Power Apps", "Figma", "UI Design"]
  },
  {
    id: 12,
    title: "Describe security and compliance concepts",
    description: "Security methodologies overview",
    date: "Jan 29, 2025",
    duration: "25 min",
    category: "Security",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/VDFDDS7M?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Security", "Compliance"]
  },
  {
    id: 13,
    title: "Describe Dynamics 365 Field Service scheduling capabilities",
    description: "Scheduling features in Dynamics 365",
    date: "Jan 28, 2025",
    duration: "30 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/UYJGK8V3?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Scheduling"]
  },
  {
    id: 14,
    title: "Describe Dynamics 365 Customer Service capabilities",
    description: "Customer service features in Dynamics 365",
    date: "Jan 27, 2025",
    duration: "35 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/WZLUKWXN?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Customer Service"]
  },
  {
    id: 15,
    title: "Explore Dynamics 365 Customer Service",
    description: "Customer service solutions overview",
    date: "Jan 27, 2025",
    duration: "40 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/3RT6Q32H?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Customer Service"]
  },
  {
    id: 16,
    title: "Describe Dynamics 365 Sales capabilities",
    description: "Sales features in Dynamics 365",
    date: "Jan 27, 2025",
    duration: "45 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/N2G3QT5F?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Sales"]
  },
  {
    id: 17,
    title: "Describe Dynamics 365 Customer Insights - Data",
    description: "Customer data analysis tools",
    date: "Jan 27, 2025",
    duration: "50 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/J9V43ZCT?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Customer Insights"]
  },
  {
    id: 18,
    title: "Explore Dynamics 365 Customer Insights - Journeys",
    description: "Customer journey mapping tools",
    date: "Jan 27, 2025",
    duration: "55 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/9XDLXDBU?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Customer Journeys"]
  },
  {
    id: 19,
    title: "Describe shared activities in Dynamics 365",
    description: "Integration options for customer engagement apps",
    date: "Jan 27, 2025",
    duration: "1 hr",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/UYJFAV23?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Integration"]
  },
  {
    id: 20,
    title: "Describe foundations of Dynamics 365 customer engagement apps",
    description: "Core concepts of Dynamics 365",
    date: "Jan 21, 2025",
    duration: "1 hr 10 min",
    category: "Dynamics 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/FV6ZM96X?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Dynamics 365", "Fundamentals"]
  },
  {
    id: 21,
    title: "Describe analytics capabilities of Microsoft 365",
    description: "Data analysis in Microsoft 365",
    date: "Jan 21, 2025",
    duration: "45 min",
    category: "Microsoft 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/QTXDS4TE?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Microsoft 365", "Analytics"]
  },
  {
    id: 22,
    title: "Describe endpoint management in Microsoft 365",
    description: "Device management concepts",
    date: "Jan 21, 2025",
    duration: "50 min",
    category: "Microsoft 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/ESYJSZTP?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Microsoft 365", "Endpoint Management"]
  },
  {
    id: 23,
    title: "Describe collaboration solutions of Microsoft 365",
    description: "Team collaboration tools",
    date: "Jan 21, 2025",
    duration: "55 min",
    category: "Microsoft 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/74HE4DMZ?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Microsoft 365", "Collaboration"]
  },
  {
    id: 24,
    title: "Describe productivity solutions of Microsoft 365",
    description: "Productivity tools overview",
    date: "Jan 21, 2025",
    duration: "1 hr",
    category: "Microsoft 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/J9V6CEQT?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Microsoft 365", "Productivity"]
  },
  {
    id: 25,
    title: "What is Microsoft 365?",
    description: "Microsoft 365 introduction",
    date: "Jan 21, 2025",
    duration: "40 min",
    category: "Microsoft 365",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/FV6Z2PPX?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Microsoft 365", "Introduction"]
  },
  {
    id: 26,
    title: "Create business value from AI",
    description: "AI implementation strategies",
    date: "Jan 21, 2025",
    duration: "1 hr 15 min",
    category: "AI",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/P5XCM6P4?sharingId=4A6A1EA5B47F1D45",
    keywords: ["AI", "Business Value"]
  },
  {
    id: 27,
    title: "Introduction to Azure DevOps",
    description: "DevOps practices in Azure",
    date: "Jan 8, 2025",
    duration: "1 hr 20 min",
    category: "DevOps",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/FVLP8YDX?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Azure", "DevOps"]
  },
  {
    id: 28,
    title: "Evaluate existing software development processes",
    description: "Process assessment techniques",
    date: "Jan 8, 2025",
    duration: "1 hr 10 min",
    category: "DevOps",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/87J5QJKW?sharingId=4A6A1EA5B47F1D45",
    keywords: ["Software Development", "Process Improvement"]
  },
  {
    id: 29,
    title: "Enable teachers to explore AI potential",
    description: "AI in education applications",
    date: "Jan 3, 2025",
    duration: "50 min",
    category: "AI",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/FR27GY8X?sharingId=4A6A1EA5B47F1D45",
    keywords: ["AI", "Education"]
  },
  {
    id: 30,
    title: "Declare variable types in TypeScript",
    description: "TypeScript type system basics",
    date: "Jul 29, 2023",
    duration: "45 min",
    category: "Development",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/J5CG2S4T?sharingId=4A6A1EA5B47F1D45",
    keywords: ["TypeScript", "Programming"]
  },
  {
    id: 31,
    title: "Get started with TypeScript",
    description: "TypeScript introduction",
    date: "Jul 29, 2023",
    duration: "1 hr",
    category: "Development",
    achievementUrl: "https://learn.microsoft.com/api/achievements/share/nb-no/AtikaKhan-7986/ZQFBZ9Q2?sharingId=4A6A1EA5B47F1D45",
    keywords: ["TypeScript", "JavaScript"]
  }
];
  // Simplilearn-sertifiseringer
  const simplilearnData = [
    { 
      id: 1,
      title: "Introduction to SEO",
      description: "Search Engine Optimization fundamentals",
      date: "Dec 21, 2024",
      duration: "1 hour",
      category: "Digital Marketing",
      achievementUrl: "https://simpli-web.app.link/e/MO6TDhKI1Rb",
      keywords: ["SEO", "Marketing", "Search"]
    },
    {
      id: 2,
      title: "Programming with Python 3.x",
      description: "Python programming fundamentals",
      date: "Dec 21, 2024",
      duration: "1 hour",
      category: "Programming",
      achievementUrl: "https://simpli-web.app.link/e/KAsuO8LI1Rb",
      keywords: ["Python", "Programming", "Development"]
    },
    {
      id: 3,
      title: "Website UI/UX Designing using ChatGPT",
      description: "UI/UX design with AI assistance",
      date: "Dec 26, 2024",
      duration: "1 hour",
      category: "Design",
      achievementUrl: "https://simpli-web.app.link/e/OLumuONI1Rb",
      keywords: ["UI/UX", "Design", "ChatGPT"]
    },
    {
      id: 4,
      title: "Introduction to Applied Data Science with Python",
      description: "Data science fundamentals with Python",
      date: "Jan 3, 2025",
      duration: "1 hour",
      category: "Data Science",
      achievementUrl: "https://simpli-web.app.link/e/jt8VW7OI1Rb",
      keywords: ["Data Science", "Python", "ML"]
    },
    {
      id: 5,
      title: "Introduction to Cyber Security",
      description: "Cybersecurity fundamentals",
      date: "Jan 5, 2025",
      duration: "1 hour",
      category: "Cyber Security",
      achievementUrl: "https://simpli-web.app.link/e/fETgmxQI1Rb",
      keywords: ["Security", "Cybersecurity", "Hacking"]
    },
    {
      id: 6,
      title: "OOPs in Java",
      description: "Object-Oriented Programming in Java",
      date: "Feb 11, 2025",
      duration: "1 hour",
      category: "Programming",
      achievementUrl: "https://simpli-web.app.link/e/SwWfvQRI1Rb",
      keywords: ["Java", "OOP", "Programming"]
    },
    {
      id: 7,
      title: "Transformer Models and BERT Model",
      description: "NLP with Transformer and BERT models",
      date: "Feb 11, 2025",
      duration: "1 hour",
      category: "AI",
      achievementUrl: "https://simpli-web.app.link/e/4mmw7wUI1Rb",
      keywords: ["NLP", "Transformers", "BERT"]
    }
  ];

  const categories = {
    microsoft: ["All", "Security & Compliance", "Azure & Cloud", "AI & Copilot", "Data Analytics"],
    simplilearn: ["All", "Digital Marketing", "Programming", "Design", "Data Science", "Cyber Security", "AI"]
  };

  const filteredData = activeTab === "microsoft" 
    ? microsoftData.filter(item => activeCategory === "All" || item.category === activeCategory)
    : simplilearnData.filter(item => activeCategory === "All" || item.category === activeCategory);

  return (
    <div className="certifications-container" id="certifications">
      <header className="certifications-header">
        <h2>Professional Certifications</h2>
        <p>Browse through my verified credentials and achievements</p>
      </header>

      <div className="certifications-tabs">
        <button 
          onClick={() => { setActiveTab("microsoft"); setActiveCategory("All"); }}
          className={`tab-button ${activeTab === "microsoft" ? "active" : ""}`}
        >
          Microsoft Learn
        </button>
        <button 
          onClick={() => { setActiveTab("simplilearn"); setActiveCategory("All"); }}
          className={`tab-button ${activeTab === "simplilearn" ? "active" : ""}`}
        >
          Simplilearn
        </button>
      </div>

      <div className="category-filter">
        {categories[activeTab].map((category) => (
          <button 
            key={category} 
            onClick={() => setActiveCategory(category)}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="certifications-grid">
        {filteredData.map((item) => (
          <div key={`${activeTab}-${item.id}`} className="certification-card">
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="card-description">{item.description}</p>
              
              <a 
                href={item.achievementUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-link"
              >
                <FaExternalLinkAlt /> View certificate
              </a>
            </div>
            
            <div className="card-footer">
              <div className="card-meta">
                <div className="meta-item">
                  <FaRegCalendarAlt className="meta-icon" />
                  <span>Completed: {item.date}</span>
                </div>
                {item.duration && (
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    <span>Duration: {item.duration}</span>
                  </div>
                )}
              </div>
              
              {item.keywords && item.keywords.length > 0 && (
                <div className="card-keywords">
                  <FaTags className="keywords-icon" />
                  <div className="keywords-list">
                    {item.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;