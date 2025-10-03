import React, { useMemo, useState } from "react";
import "./App.css";

type Insight = {
  label: string;
  value: string;
  trend?: "up" | "down" | "steady";
};

type TemplateCardProps = {
  title: string;
  description: string;
  category: string;
  gradient: string;
};

const templateCards: TemplateCardProps[] = [
  {
    title: "Product Spotlight",
    description:
      "Showcase a new product launch with a bold hero, feature highlights, and a clear call-to-action.",
    category: "Promotional",
    gradient: "linear-gradient(135deg, #7b61ff 0%, #ff8dc8 100%)",
  },
  {
    title: "Customer Onboarding",
    description:
      "Guide new subscribers through their first steps with concise copy and milestone progress indicators.",
    category: "Lifecycle",
    gradient: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
  },
  {
    title: "Weekly Digest",
    description:
      "Curate educational resources and company news in a modular layout optimised for scannability.",
    category: "Newsletter",
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
  },
  {
    title: "Win-back Series",
    description:
      "Reignite dormant audiences with personalised offers, social proof, and urgency-driven messaging.",
    category: "Retention",
    gradient: "linear-gradient(135deg, #16a085 0%, #f4d03f 100%)",
  },
];

const insights: Insight[] = [
  { label: "Delivered", value: "18,245", trend: "up" },
  { label: "Opened", value: "12,932", trend: "up" },
  { label: "Clicked", value: "4,102", trend: "steady" },
  { label: "Marked Spam", value: "312", trend: "down" },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const filteredTemplates = useMemo(() => templateCards.slice(0, 4), []);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__icon">✉️</div>
          <div>
            <h1>PulseMail</h1>
            <p>Customer engagement suite</p>
          </div>
        </div>

        <div className="auth-card">
          <h2>Login with Firebase</h2>
          <p>
            Secure authentication handled via Firebase — plug in your project
            keys to get started instantly.
          </p>
          <button className="primary-button">Sign in with Google</button>
        </div>

        <nav className="navigation">
          <button
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={() => setActiveSection("home")}
          >
            Home
          </button>
          <button
            className={`nav-link ${
              activeSection === "templates" ? "active" : ""
            }`}
            onClick={() => setActiveSection("templates")}
          >
            Templates
          </button>
          <button
            className={`nav-link ${
              activeSection === "analytics" ? "active" : ""
            }`}
            onClick={() => setActiveSection("analytics")}
          >
            Analytics
          </button>
          <button
            className={`nav-link ${
              activeSection === "feedback" ? "active" : ""
            }`}
            onClick={() => setActiveSection("feedback")}
          >
            Feedback
          </button>
        </nav>

        <footer className="sidebar__footer">
          <p>Need help?</p>
          <a href="#support">Talk to an expert →</a>
        </footer>
      </aside>

      <main className="content">
        {activeSection === "home" && (
          <section className="panel panel--home">
            <header>
              <span className="eyebrow">Lifecycle marketing strategy</span>
              <h2>Orchestrate impactful campaigns end to end.</h2>
            </header>
            <div className="grid-2">
              <article className="card">
                <h3>Segment intelligently</h3>
                <p>
                  Sync customer data from Firebase and leverage behavioural triggers
                  to deliver highly personalised journeys with real-time relevance.
                </p>
              </article>
              <article className="card">
                <h3>Automate delivery</h3>
                <p>
                  Build automated drip flows, run A/B experiments, and ensure
                  deliverability with built-in compliance and monitoring tools.
                </p>
              </article>
              <article className="card">
                <h3>Measure impact</h3>
                <p>
                  Track campaign performance through advanced analytics that
                  surface trends, anomalies, and actionable insights at a glance.
                </p>
              </article>
              <article className="card">
                <h3>Collaborate effortlessly</h3>
                <p>
                  Share templates, gather approvals, and collect feedback from
                  stakeholders without leaving the workspace.
                </p>
              </article>
            </div>
          </section>
        )}

        {activeSection === "templates" && (
          <section className="panel panel--templates">
            <header>
              <span className="eyebrow">Template library</span>
              <h2>Launch-ready canvases for every stage of the funnel.</h2>
            </header>
            <div className="template-grid">
              {filteredTemplates.map((template) => (
                <article
                  key={template.title}
                  className="template-card"
                  style={{ backgroundImage: template.gradient }}
                >
                  <div className="template-card__content">
                    <span className="badge">{template.category}</span>
                    <h3>{template.title}</h3>
                    <p>{template.description}</p>
                    <button className="ghost-button">Preview template</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === "analytics" && (
          <section className="panel panel--analytics">
            <header>
              <span className="eyebrow">Realtime performance</span>
              <h2>Understand campaign health with granular telemetry.</h2>
            </header>
            <div className="analytics">
              <div className="analytics__chart">
                <div className="chart-placeholder">
                  <div className="chart-ring"></div>
                  <div className="chart-ring chart-ring--secondary"></div>
                  <div className="chart-centre">
                    <strong>72%</strong>
                    <span>Engagement rate</span>
                  </div>
                </div>
                <p>
                  Integrate with Firebase Cloud Functions to stream delivery,
                  open, and conversion metrics in near real time.
                </p>
              </div>
              <ul className="insight-list">
                {insights.map((insight) => (
                  <li key={insight.label}>
                    <span className="insight-list__label">{insight.label}</span>
                    <span className="insight-list__value">{insight.value}</span>
                    {insight.trend && (
                      <span className={`trend trend--${insight.trend}`}>
                        {insight.trend === "up" && "▲"}
                        {insight.trend === "down" && "▼"}
                        {insight.trend === "steady" && "■"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {activeSection === "feedback" && (
          <section className="panel panel--feedback">
            <header>
              <span className="eyebrow">Collaboration hub</span>
              <h2>Receive actionable feedback from stakeholders.</h2>
            </header>
            <div className="feedback-grid">
              <article className="feedback-card">
                <h3>Creative direction</h3>
                <p>
                  "Consider a more vibrant hero image for the onboarding journey
                  to reinforce the product value proposition."
                </p>
                <span className="chip chip--design">Design team</span>
              </article>
              <article className="feedback-card">
                <h3>Deliverability</h3>
                <p>
                  "SPF and DKIM checks passed, but we recommend warming up the new
                  IP for the upcoming campaign."
                </p>
                <span className="chip chip--ops">Operations</span>
              </article>
              <article className="feedback-card">
                <h3>Copywriting</h3>
                <p>
                  "Subject line performs well, yet preview text can be more
                  benefit-driven to boost open rates."
                </p>
                <span className="chip chip--content">Content team</span>
              </article>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
