import React, { useState } from 'react';
import '../Certifications.css';
import { FaMicrosoft, FaAward, FaRegCalendarAlt, FaClock, FaTags, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('microsoft');
  const [activeCategory, setActiveCategory] = useState('All');

     // Microsoft Learn-moduler med alle lenker
     const microsoftData = [
        // Security & Compliance
        { 
          id: 1, 
          title: "Design security operations, identity and compliance capabilities", 
          description: "Cybersecurity architect skills for business scenarios", 
          date: "Feb 21, 2025", 
          duration: "1 hr 26 min", 
          result: "Passed", 
          category: "Security & Compliance", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/3RGUCJLH?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/en-us/users/atikakhan-7986/achievements/8759b5vw",
          keywords: ["Security", "Azure", "Compliance"] 
        },
        { 
          id: 6, 
          title: "Describe identity concepts", 
          description: "Fundamentals of identity management", 
          date: "Feb 8, 2025", 
          duration: "20 min", 
          result: "Passed", 
          category: "Security & Compliance", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/74W8MVLZ?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/74W8MVLZ?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Identity", "Security"] 
        },
        { 
          id: 11, 
          title: "Security and compliance concepts", 
          description: "Security methodologies overview", 
          date: "Jan 29, 2025", 
          duration: "25 min", 
          result: "Passed", 
          category: "Security & Compliance", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/J9QV4Y3T?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/J9QV4Y3T?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Security", "Compliance"] 
        },
        { 
          id: 23, 
          title: "Windows PowerShell", 
          description: "Command line and scripting", 
          date: "May 27, 2023", 
          duration: "55 min", 
          result: "N/A", 
          category: "Security & Compliance", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/J9QV6FBT?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/J9QV6FBT?sharingId=4A6A1EA5B47F1D45",
          keywords: ["PowerShell", "Scripting", "Windows"] 
        },
    
        // Azure & Cloud
        { 
          id: 2, 
          title: "Microsoft Cloud for Healthcare overview", 
          description: "Introduction to healthcare cloud solutions", 
          date: "Feb 8, 2025", 
          duration: "33 min", 
          result: "N/A", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/HALSYN38?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/HALSYN38?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Healthcare", "Cloud"] 
        },
        { 
          id: 7, 
          title: "Deploy a Spring Boot app to Azure", 
          description: "Java app deployment on Azure", 
          date: "Feb 6, 2025", 
          duration: "30 min", 
          result: "N/A", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/VDXWV2KM?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/VDXWV2KM?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Azure", "Java", "Spring Boot"] 
        },
        { 
          id: 8, 
          title: "Choose the right Azure service for Java", 
          description: "Azure services for Java applications", 
          date: "Feb 6, 2025", 
          duration: "25 min", 
          result: "Passed", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZ6ER3SN?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZ6ER3SN?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Azure", "Java"] 
        },
        { 
          id: 9, 
          title: "Introduction to Java on Azure", 
          description: "Java development on Azure platform", 
          date: "Feb 6, 2025", 
          duration: "37 min", 
          result: "Passed", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYS2WAK3?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYS2WAK3?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Azure", "Java"] 
        },
        { 
          id: 19, 
          title: "Introduction to Azure DevOps", 
          description: "DevOps practices and tools", 
          date: "Jan 8, 2025", 
          duration: "21 min", 
          result: "N/A", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/4LZ9QQDK?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/4LZ9QQDK?sharingId=4A6A1EA5B47F1D45",
          keywords: ["DevOps", "Azure"] 
        },
        { 
          id: 22, 
          title: "Cloud service types", 
          description: "IaaS, PaaS, SaaS models", 
          date: "Jul 23, 2023", 
          duration: "12 min", 
          result: "N/A", 
          category: "Azure & Cloud", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/VDFDDS7M?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/VDFDDS7M?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Cloud", "IaaS", "PaaS", "SaaS"] 
        },
        
        // AI & Data
        { 
          id: 3, 
          title: "Design a dream destination using Microsoft Copilot", 
          description: "Generative AI capabilities with Copilot", 
          date: "Feb 8, 2025", 
          duration: "53 min", 
          result: "Passed", 
          category: "AI & Data", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYJGK8V3?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYJGK8V3?sharingId=4A6A1EA5B47F1D45",
          keywords: ["AI", "Copilot", "Generative AI"] 
        },
        { 
          id: 4, 
          title: "Get started building with Power BI", 
          description: "Power BI fundamentals and visualization", 
          date: "Feb 8, 2025", 
          duration: "21 min", 
          result: "N/A", 
          category: "AI & Data", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZLUKWXN?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/WZLUKWXN?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Power BI", "Data Visualization"] 
        },
        { 
          id: 5, 
          title: "Explore what Power BI can do for you", 
          description: "Power BI service fundamentals", 
          date: "Feb 8, 2025", 
          duration: "1 hr 9 min", 
          result: "Passed", 
          category: "AI & Data", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/3RT6Q32H?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/3RT6Q32H?sharingId=4A6A1EA5B47F1D45",
          keywords: ["Power BI", "Analytics"] 
        },
        { 
          id: 18, 
          title: "Create business value from AI", 
          description: "AI strategy and implementation", 
          date: "Jan 21, 2025", 
          duration: "28 min", 
          result: "N/A", 
          category: "AI & Data", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYJGVBF3?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/UYJGVBF3?sharingId=4A6A1EA5B47F1D45",
          keywords: ["AI", "Business Strategy"] 
        },
        { 
          id: 20, 
          title: "AI in education", 
          description: "AI tools for educators", 
          date: "Jan 3, 2025", 
          duration: "1 hr", 
          result: "Passed", 
          category: "AI & Data", 
          badgeUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/9XDLZN9U?sharingId=4A6A1EA5B47F1D45", 
          achievementUrl: "https://learn.microsoft.com/api/achievements/share/en-us/AtikaKhan-7986/9XDLZN9U?sharingId=4A6A1EA5B47F1D45",
          keywords: ["AI", "Education"] 
        },
      ];
    
      // Simplilearn-sertifiseringer
      const simplilearnData = [
        { 
          id: 1, 
          title: "Introduction to SEO", 
          description: "Search Engine Optimization fundamentals", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/SEO_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/MO6TDhKI1Rb",
          keywords: ["SEO", "Marketing"] 
        },
        { 
          id: 2, 
          title: "Introduction to Digital Marketing", 
          description: "Fundamentals of digital marketing strategies", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Digital_Marketing_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/KAsuO8LI1Rb",
          keywords: ["Digital Marketing", "SEO", "Social Media"] 
        },
        { 
          id: 3, 
          title: "Introduction to Social Media Marketing", 
          description: "Social media strategies and platforms", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Social_Media_Marketing_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/OLumuONI1Rb",
          keywords: ["Social Media", "Marketing", "Facebook", "Instagram"] 
        },
        { 
          id: 4, 
          title: "Introduction to Email Marketing", 
          description: "Email campaign strategies and tools", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Email_Marketing_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/jt8VW7OI1Rb",
          keywords: ["Email Marketing", "Campaigns", "Newsletters"] 
        },
        { 
          id: 5, 
          title: "Introduction to PPC", 
          description: "Pay-Per-Click advertising fundamentals", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/PPC_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/fETgmxQI1Rb",
          keywords: ["PPC", "Advertising", "Google Ads"] 
        },
        { 
          id: 6, 
          title: "Introduction to Content Marketing", 
          description: "Content creation and strategy", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Content_Marketing_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/SwWfvQRI1Rb",
          keywords: ["Content Marketing", "Blogging", "Copywriting"] 
        },
        { 
          id: 7, 
          title: "Introduction to Web Analytics", 
          description: "Website performance measurement", 
          date: "Dec 21, 2024", 
          duration: "1 hr", 
          result: "Passed", 
          category: "Digital Marketing", 
          badgeUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Web_Analytics_Certificate.svg", 
          achievementUrl: "https://simpli-web.app.link/e/4mmw7wUI1Rb",
          keywords: ["Analytics", "Google Analytics", "Metrics"] 
        }
      ];


  const categories = {
    microsoft: ["All", "Security & Compliance", "Azure & Cloud", "AI & Data"],
    simplilearn: ["All", "Digital Marketing", "Programming", "Design", "Data Science", "Security"]
  };

  const filteredMicrosoftData = microsoftData.filter((item) => 
    activeCategory === "All" || item.category === activeCategory
  );

  const filteredSimplilearnData = simplilearnData.filter((item) => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="certifications-container">
      <header className="certifications-header">
        <h2>Professional Certifications</h2>
        <p>Browse through my verified credentials and achievements</p>
      </header>

      <div className="certifications-tabs">
        <button 
          onClick={() => setActiveTab("microsoft")} 
          className={`tab-button ${activeTab === "microsoft" ? "active" : ""}`}
        >
          <FaMicrosoft className="tab-icon" /> Microsoft Learn
        </button>
        <button 
          onClick={() => setActiveTab("simplilearn")} 
          className={`tab-button ${activeTab === "simplilearn" ? "active" : ""}`}
        >
          <FaAward className="tab-icon" /> Simplilearn
        </button>
      </div>

      <div className="category-filter">
        {(activeTab === "microsoft" ? categories.microsoft : categories.simplilearn).map((category) => (
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
        {(activeTab === "microsoft" ? filteredMicrosoftData : filteredSimplilearnData).map((item) => (
          <div key={item.id} className="certification-card">
            <div className="card-header">
              <img src={item.badgeUrl} alt={item.title} className="certification-badge" />
              <div className="card-title">
                <h3>{item.title}</h3>
                <a 
                  href={item.achievementUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verification-link"
                >
                  <FaExternalLinkAlt /> Verify Credential
                </a>
              </div>
            </div>
            
            <p className="card-description">{item.description}</p>
            
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
        ))}
      </div>
    </div>
  );
};

export default Certifications;