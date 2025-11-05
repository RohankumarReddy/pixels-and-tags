import { Brain, MessageSquare, BarChart3, FileBadge2,Library } from "lucide-react";

export const features = [
  {
    icon: (
      <Brain className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
    ),
    title: "AI-Powered Career Pathing",
    description:
      "Discover your ideal career path with AI-driven insights tailored to your strengths and goals.",
  },
  {
    icon: (
      <MessageSquare className="w-12 h-12 mb-4 text-purple-500 dark:text-purple-400 transition-transform duration-300 group-hover:scale-110" />
    ),
    title: "Smart Interview Prep",
    description:
      "Practice role-specific mock interviews with instant AI feedback to boost your confidence.",
  },
  {
    icon: (
      <BarChart3 className="w-12 h-12 mb-4 text-green-500 dark:text-green-400 transition-transform duration-300 group-hover:scale-110" />
    ),
    title: "Real-Time Industry Insights",
    description:
      "Stay updated with live analytics, salary data, and job trends from top industries.",
  },
  {
    icon: (
      <FileBadge2 className="w-12 h-12 mb-4 text-pink-500 dark:text-pink-400 transition-transform duration-300 group-hover:scale-110" />
    ),
    title: "AI Resume Builder",
    description:
      "Create stunning, ATS-optimized resumes that showcase your skills and land interviews faster.",
  },
  {
  icon: (
    <Library className="w-12 h-12 mb-4 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110" />
  ),
  title: "AI Learning Feed",
  description:
    "Get a personalized feed of high-quality learning resources tailored to your skills, industry, and interests.",
},


];
