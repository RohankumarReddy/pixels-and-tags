"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BriefcaseIcon, LineChart, TrendingUp, TrendingDown, Brain } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  const salaryData = insights.salaryRanges.map((r) => ({
    name: r.role,
    min: r.min / 1000,
    median: r.median / 1000,
    max: r.max / 1000,
  }));

  const demandColors = { high: "bg-green-500", medium: "bg-yellow-400", low: "bg-red-500" };
  const marketIcons = {
    positive: { icon: TrendingUp, color: "text-green-400" },
    neutral: { icon: LineChart, color: "text-yellow-400" },
    negative: { icon: TrendingDown, color: "text-red-400" },
  };

  const getDemandColor = (level) => demandColors[level.toLowerCase()] || "bg-gray-400";
  const { icon: OutlookIcon, color: outlookColor } =
    marketIcons[insights.marketOutlook.toLowerCase()] || { icon: LineChart, color: "text-gray-400" };

  const lastUpdated = format(new Date(insights.lastUpdated), "dd MMM yyyy");
  const nextUpdate = formatDistanceToNow(new Date(insights.nextUpdate), { addSuffix: true });

  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-12 py-6">
      {/* Last Updated */}
      <div className="flex justify-end">
        <Badge variant="outline" className="bg-gray-800 text-gray-200 border-gray-600 animate-pulse">
          Last updated: {lastUpdated}
        </Badge>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/** Card Component Functionality Reused for All Four */}
        {[
          {
            title: "Market Outlook",
            value: insights.marketOutlook,
            icon: <OutlookIcon className={`h-5 w-5 ${outlookColor} animate-bounce`} />,
            description: `Next update ${nextUpdate}`,
            gradient: "bg-gradient-to-br from-blue-800 to-blue-600",
          },
          {
            title: "Industry Growth",
            value: `${insights.growthRate.toFixed(1)}%`,
            icon: <TrendingUp className="h-5 w-5 text-green-200" />,
            description: null,
            gradient: "bg-gradient-to-br from-green-800 to-green-600",
            progress: insights.growthRate,
          },
          {
            title: "Demand Level",
            value: insights.demandLevel,
            icon: <BriefcaseIcon className="h-5 w-5 text-yellow-100" />,
            description: null,
            gradient: "bg-gradient-to-br from-yellow-800 to-yellow-600",
            progressBar: getDemandColor(insights.demandLevel),
          },
          {
            title: "Top Skills",
            value: insights.topSkills,
            icon: <Brain className="h-5 w-5 text-purple-200" />,
            description: null,
            gradient: "bg-gradient-to-br from-purple-800 to-purple-600",
            badges: true,
          },
        ].map((card, idx) => (
          <Card
            key={idx}
            className={`${card.gradient} hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl`}
          >
            <CardHeader className="flex justify-between pb-2">
              <CardTitle className="text-sm font-bold text-white tracking-wide">{card.title}</CardTitle>
              {card.icon}
            </CardHeader>
            <CardContent>
              {card.badges ? (
                <div className="flex flex-wrap gap-2">
                  {card.value.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-purple-200 text-purple-900 font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              ) : (
                <>
                  <div className="text-2xl font-extrabold text-white">{card.value}</div>
                  {card.description && <p className="text-xs text-gray-200 mt-1">{card.description}</p>}
                  {card.progress && <Progress value={card.progress} className="mt-2 h-2 rounded-full bg-green-300" />}
                  {card.progressBar && <div className={`h-2 w-full rounded-full mt-2 ${card.progressBar} animate-pulse`} />}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Salary Chart */}
      <Card className="bg-gray-900 hover:shadow-xl transition-shadow duration-300 rounded-xl">
        <CardHeader>
          <CardTitle className="text-white font-bold">Salary Ranges by Role</CardTitle>
          <CardDescription className="text-gray-300">Minimum, Median, and Maximum salaries (K)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData} barCategoryGap={20}>
                <CartesianGrid stroke="#444" strokeDasharray="4 4" />
                <XAxis dataKey="name" tick={{ fill: "#ddd", fontSize: 12 }} />
                <YAxis tick={{ fill: "#ddd", fontSize: 12 }} />
                <Tooltip
                  content={({ active, payload, label }) =>
                    active && payload?.length ? (
                      <div className="bg-gray-800 text-white p-3 border-4 border-amber-100 rounded-lg shadow-lg">
                        <p className="font-semibold mb-1">{label}</p>
                        {payload.map((item) => (
                          <p key={item.name} className="text-sm">
                            {item.name}: <span className="font-bold">${item.value}K</span>
                          </p>
                        ))}
                      </div>
                    ) : null
                  }
                />
                <Bar dataKey="min" fill="#94a3b8" radius={[5, 5, 0, 0]} />
                <Bar dataKey="median" fill="#64748b" radius={[5, 5, 0, 0]} />
                <Bar dataKey="max" fill="#475569" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends & Recommended Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-white font-bold">Key Industry Trends</CardTitle>
            <CardDescription className="text-gray-300">Current trends shaping the industry</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {insights.keyTrends.map((trend, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse" />
                  <span className="text-gray-200 font-medium">{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 hover:scale-105 transition-transform duration-300 shadow-2xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-white font-bold">Recommended Skills</CardTitle>
            <CardDescription className="text-gray-300">Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-gray-500 text-gray-200 px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardView;
