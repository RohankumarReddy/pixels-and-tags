"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function PerformanceChart({ assessments }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (assessments?.length > 0) {
      const formattedData = assessments.map((assessment) => ({
        date: format(new Date(assessment.createdAt), "MMM dd"),
        score: assessment.quizScore,
      }));
      setChartData(formattedData.reverse()); // show latest on right side
    }
  }, [assessments]);

  return (
    <Card className="border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white shadow-xl">
      <CardHeader className="pb-3">
        <CardTitle className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold tracking-tight">
          Performance Trend
        </CardTitle>
        <CardDescription className="text-gray-400">
          Track your quiz progress and improvement over time
        </CardDescription>
      </CardHeader>

      <CardContent>
        {chartData.length > 0 ? (
          <div className="h-[320px] md:h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  {/* Gradient for line stroke */}
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00BFFF" stopOpacity={1} />
                    <stop offset="100%" stopColor="#0077FF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3", stroke: "#334155" }}
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid white",
                    borderRadius: "10px",
                    color: "#e2e8f0",
                  }}
                  labelStyle={{ color: "#38bdf8" }}
                />
                <Legend
                  wrapperStyle={{
                    color: "#9ca3af",
                    fontSize: "12px",
                    marginTop: "10px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  name="Quiz Score (%)"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{
                    r: 5,
                    strokeWidth: 2,
                    stroke: "#38bdf8",
                    fill: "#0f172a",
                  }}
                  activeDot={{
                    r: 7,
                    stroke: "#22d3ee",
                    strokeWidth: 2,
                    fill: "#0f172a",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-gray-400 text-center py-10">
            No quiz data available yet. Take your first quiz to see progress!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
