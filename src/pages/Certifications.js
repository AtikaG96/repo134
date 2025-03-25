import React, { useState } from 'react';
import '../Certifications.css';
import { FaRegCalendarAlt, FaClock, FaTags, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('microsoft');
  const [activeCategory, setActiveCategory] = useState('All');

  // Microsoft Learn-moduler (alle 31)
  const microsoftData = [
    { 
      id: 1, 
      title: "Design security operations, identity and compliance capabilities", 
      description: "Cybersecurity architect skills for business scenarios", 
      date: "Feb 21, 2025", 
      duration: "1 hr 26 min", 
      category: "Security & Compliance", 
      achievementUrl: "https://learn.microsoft.com/en-us/users/atikakhan-7986/achievements/8759b5vw",
      keywords: ["Security", "Azure", "Compliance"] 
    },
    { 
      id: 2, 
      title: "Microsoft Cloud for Healthcare overview", 
      description: "Introduction to healthcare cloud solutions", 
      date: "Feb 8, 2025", 
      duration: "33 min", 
      category: "Azure & Cloud", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/HALSYN38?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Healthcare", "Cloud"] 
    },
    { 
      id: 3, 
      title: "Design a dream destination using Microsoft Copilot", 
      description: "Generative AI capabilities with Copilot", 
      date: "Feb 8, 2025", 
      duration: "53 min", 
      category: "AI & Data", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYJGK8V3?sharingId=4A6A1EA5B47F1D45",
      keywords: ["AI", "Copilot", "Generative AI"] 
    },
    { 
      id: 4, 
      title: "Get started building with Power BI", 
      description: "Power BI fundamentals and visualization", 
      date: "Feb 8, 2025", 
      duration: "21 min", 
      category: "AI & Data", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZLUKWXN?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Power BI", "Data Visualization"] 
    },
    { 
      id: 5, 
      title: "Explore what Power BI can do for you", 
      description: "Power BI service fundamentals", 
      date: "Feb 8, 2025", 
      duration: "1 hr 9 min", 
      category: "AI & Data", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/3RT6Q32H?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Power BI", "Analytics"] 
    },
    { 
      id: 6, 
      title: "Describe identity concepts", 
      description: "Fundamentals of identity management", 
      date: "Feb 8, 2025", 
      duration: "20 min", 
      category: "Security & Compliance", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/74W8MVLZ?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Identity", "Security"] 
    },
    { 
      id: 7, 
      title: "Deploy a Spring Boot app to Azure", 
      description: "Java app deployment on Azure", 
      date: "Feb 6, 2025", 
      duration: "30 min", 
      category: "Azure & Cloud", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/VDXWV2KM?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Azure", "Java", "Spring Boot"] 
    },
    { 
      id: 8, 
      title: "Choose the right Azure service for Java", 
      description: "Azure services for Java applications", 
      date: "Feb 6, 2025", 
      duration: "25 min", 
      category: "Azure & Cloud", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZ6ER3SN?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Azure", "Java"] 
    },
    { 
      id: 9, 
      title: "Introduction to Java on Azure", 
      description: "Java development on Azure platform", 
      date: "Feb 6, 2025", 
      duration: "37 min", 
      category: "Azure & Cloud", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYS2WAK3?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Azure", "Java"] 
    },
    { 
      id: 10, 
      title: "Security and compliance concepts", 
      description: "Security methodologies overview", 
      date: "Jan 29, 2025", 
      duration: "25 min", 
      category: "Security & Compliance", 
      achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/J9QV4Y3T?sharingId=4A6A1EA5B47F1D45",
      keywords: ["Security", "Compliance"] 
    },
    // Legg til de resterende 21 Microsoft-sertifiseringene her...
  ];

  // Simplilearn-sertifiseringer (alle 7)
  const simplilearnData = [
    { 
      id: 1, 
      title: "Introduction to SEO", 
      description: "Search Engine Optimization fundamentals", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/MO6TDhKI1Rb",
      keywords: ["SEO", "Marketing"] 
    },
    { 
      id: 2, 
      title: "Introduction to Digital Marketing", 
      description: "Fundamentals of digital marketing strategies", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/KAsuO8LI1Rb",
      keywords: ["Digital Marketing", "SEO", "Social Media"] 
    },
    { 
      id: 3, 
      title: "Introduction to Social Media Marketing", 
      description: "Social media strategies and platforms", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/OLumuONI1Rb",
      keywords: ["Social Media", "Marketing", "Facebook", "Instagram"] 
    },
    { 
      id: 4, 
      title: "Introduction to Email Marketing", 
      description: "Email campaign strategies and tools", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/jt8VW7OI1Rb",
      keywords: ["Email Marketing", "Campaigns", "Newsletters"] 
    },
    { 
      id: 5, 
      title: "Introduction to PPC", 
      description: "Pay-Per-Click advertising fundamentals", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/fETgmxQI1Rb",
      keywords: ["PPC", "Advertising", "Google Ads"] 
    },
    { 
      id: 6, 
      title: "Introduction to Content Marketing", 
      description: "Content creation and strategy", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/SwWfvQRI1Rb",
      keywords: ["Content Marketing", "Blogging", "Copywriting"] 
    },
    { 
      id: 7, 
      title: "Introduction to Web Analytics", 
      description: "Website performance measurement", 
      date: "Dec 21, 2024", 
      duration: "1 hr", 
      category: "Digital Marketing", 
      achievementUrl: "https://simpli-web.app.link/e/4mmw7wUI1Rb",
      keywords: ["Analytics", "Google Analytics", "Metrics"] 
    }
  ];

  const categories = {
    microsoft: ["All", "Security & Compliance", "Azure & Cloud", "AI & Data"],
    simplilearn: ["All", "Digital Marketing"]
  };

  const filteredData = activeTab === "microsoft" 
    ? microsoftData.filter(item => activeCategory === "All" || item.category === activeCategory)
    : simplilearnData.filter(item => activeCategory === "All" || item.category === activeCategory);

  return (
    <div className="certifications-container">
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
                <FaExternalLinkAlt /> Vis sertifikat
              </a>
            </div>
            
            <div className="card-footer">
              <div className="card-meta">
                <div className="meta-item">
                  <FaRegCalendarAlt className="meta-icon" />
                  <span>Fullført: {item.date}</span>
                </div>
                {item.duration && (
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    <span>Varighet: {item.duration}</span>
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