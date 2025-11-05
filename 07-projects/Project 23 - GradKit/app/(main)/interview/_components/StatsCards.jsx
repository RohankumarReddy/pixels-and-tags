import { Brain, Target, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ assessments }) {
  const getAverageScore = () => {
    if (!assessments?.length) return 0;
    const total = assessments.reduce(
      (sum, assessment) => sum + assessment.quizScore,
      0
    );
    return (total / assessments.length).toFixed(1);
  };

  const getLatestAssessment = () => {
    if (!assessments?.length) return null;
    return assessments[0];
  };

  const getTotalQuestions = () => {
    if (!assessments?.length) return 0;
    return assessments.reduce(
      (sum, assessment) => sum + assessment.questions.length,
      0
    );
  };

  const stats = [
    {
      title: "Average Score",
      value: `${getAverageScore()}%`,
      description: "Across all assessments",
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      gradient: "from-yellow-500/20 to-yellow-500/5",
      border: "border-yellow-400/30",
      text: "text-yellow-300",
    },
    {
      title: "Questions Practiced",
      value: getTotalQuestions(),
      description: "Total questions attempted",
      icon: <Brain className="h-6 w-6 text-cyan-400" />,
      gradient: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-400/30",
      text: "text-cyan-300",
    },
    {
      title: "Latest Score",
      value: `${getLatestAssessment()?.quizScore.toFixed(1) || 0}%`,
      description: "Most recent quiz",
      icon: <Target className="h-6 w-6 text-pink-400" />,
      gradient: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-400/30",
      text: "text-pink-300",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat, i) => (
        <Card
          key={i}
          className={`relative overflow-hidden border ${stat.border} bg-gradient-to-br ${stat.gradient} backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
        >
          {/* subtle glow effect */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)] pointer-events-none" />
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle
              className={`text-sm font-medium uppercase tracking-wider ${stat.text}`}
            >
              {stat.title}
            </CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div
              className={`text-3xl md:text-4xl font-bold ${stat.text} drop-shadow-sm`}
            >
              {stat.value}
            </div>
            <p className="text-sm text-gray-400 mt-1">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
