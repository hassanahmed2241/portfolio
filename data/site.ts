// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  To update the portfolio, edit this file, commit and push.
//  Vercel redeploys automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Hassan Ahmed",
  role: "Senior Software Engineer · Full-Stack",
  location: "Lahore, Pakistan",
  // Change this after deploying (or once you connect a custom domain).
  url: "https://portfolio-lyart-xi-73.vercel.app",

  // Shown as a small badge in the hero. Set to "" to hide it.
  availability: "Open to full-stack roles & remote projects",

  intro:
    "I build and scale production web platforms with Ruby on Rails, React and AWS. " +
    "For the past five years I've worked on a SaaS platform serving 1,000+ live agencies, " +
    "owning everything from performance and HIPAA compliance to cloud infrastructure, " +
    "integrations and data migration. Today I lead a team of engineers through its " +
    "backend re-architecture onto NestJS.",

  links: {
    email: "hassanahmed2241@gmail.com",
    linkedin: "https://www.linkedin.com/in/hassanahmed-swe/",
    // Add your GitHub profile URL here; the button stays hidden while it's empty.
    github: "https://github.com/hassanahmed2241",
    resume: "/Hassan_Ahmed_Resume.pdf",
  },

  stats: [
    { value: "5+", label: "years building production software" },
    { value: "1,000+", label: "live agencies on the platform" },
    { value: "~80%", label: "faster main dashboard (15s → 3s)" },
    { value: "5–6", label: "engineers led" },
  ],

  experience: {
    company: "CodingCops",
    period: "Oct 2021 – Present",
    product: "NextAgency",
    productDescription: "an agency management SaaS platform serving 1,000+ live agencies.",
    productUrl: "https://nextagency.com",
    roles: [
      { title: "Senior Software Engineer", period: "Feb 2025 – Present" },
      { title: "Software Engineer", period: "Feb 2022 – Feb 2025" },
      { title: "Associate Software Engineer", period: "Oct 2021 – Feb 2022" },
    ],
    highlights: [
      "Lead a team of 5–6 engineers; own client communication, technical planning and code reviews.",
      "Mentored 4–5 engineers, several since promoted from Associate SE to SE and Senior SE.",
      "Driving the backend of the platform's migration to a new stack, from schema design to live data migration.",
    ],
  },

  work: [
    {
      title: "Performance",
      text: "Re-engineered the main dashboard, cutting load time from 10–15 seconds to 2–3 seconds. Added New Relic APM to track response times and catch bottlenecks in production.",
      tags: ["Rails", "PostgreSQL", "New Relic"],
    },
    {
      title: "Cloud & DevOps",
      text: "Helped move production workloads from AWS Elastic Beanstalk to ECS tasks, and replaced manual releases with automated CI/CD pipelines.",
      tags: ["AWS ECS", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Security & Compliance",
      text: "Made the application HIPAA compliant end to end, across both application code and AWS infrastructure configuration.",
      tags: ["HIPAA", "AWS IAM", "S3"],
    },
    {
      title: "Third-party Integrations",
      text: "Built payment, communication and HR integrations that connect the platform with the services agencies rely on every day.",
      tags: ["Stripe", "Twilio", "SendGrid", "Zapier", "Intulse", "Employee Navigator"],
    },
    {
      title: "Data & Architecture",
      text: "Redesigned the database schema for the new platform and built the pipeline that migrates live customer data. Wrote scripts to onboard agencies from their previous portals.",
      tags: ["Schema design", "Data migration", "Scripting"],
    },
    {
      title: "AI Features",
      text: "Integrated AWS Bedrock to add LLM-powered summarization to the product.",
      tags: ["AWS Bedrock", "LLMs"],
    },
  ],

  skills: [
    { group: "Backend", items: ["Ruby on Rails", "NestJS", "Sidekiq", "REST APIs"] },
    { group: "Frontend", items: ["React"] },
    { group: "Database", items: ["PostgreSQL", "Schema design", "Data migration"] },
    { group: "Cloud", items: ["AWS ECS", "Elastic Beanstalk", "S3", "IAM", "Bedrock"] },
    { group: "DevOps", items: ["GitHub Actions", "CI/CD", "New Relic"] },
    { group: "Security", items: ["HIPAA compliance"] },
  ],

  education: [
    { degree: "MS Computer Science", school: "UET Lahore", period: "2025 – Present" },
    { degree: "BS Computer Science", school: "GC University Lahore", period: "Graduated 2021" },
  ],

  internships: [
    { org: "Systems Limited", role: "Cloud & Infrastructure Intern", period: "2021" },
    { org: "KICS, UET Lahore", role: "Intern", period: "2019" },
  ],

  publication: {
    title:
      "Intelligent IoT Traffic Engineering and Monitoring: A Review of AI, SDN, and QoS Approaches",
    venue:
      "International Journal of Computer Science and Telecommunications (IJCST), Vol. 17, Issue 3, July 2026",
    url: "https://www.ijcst.org/Volume17/Issue3/p7_17_3.pdf",
  },
};

export type Site = typeof site;
