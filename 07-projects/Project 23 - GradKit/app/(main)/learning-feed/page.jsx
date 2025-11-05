"use client";

import { useState } from "react";
import { LearningFeed } from "@/actions/LearningFeed";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Sparkles, Library, BookOpen } from "lucide-react";

export default function LearningFeedPage() {
  const [industry, setIndustry] = useState("");
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateFeed = async () => {
    setLoading(true);
    setFeed([]);

    if (!industry && !skills && !interests) {
      toast.error("Please fill in at least one field.");
      setLoading(false);
      return;
    }

    const result = await LearningFeed({
      industry,
      skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
      interests: interests.split(",").map((i) => i.trim()).filter(Boolean),
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else if (result.feed) {
      setFeed(result.feed);
      toast.success("Your feed has been generated!");
    } else {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text">
          GradKit Learning Feed
        </h1>
        <p className="text-gray-300 md:text-lg">
          Enter your industry, skills, and interests to generate a curated feed.
        </p>
        <p className="font-bold  animate-float text-sm md:text-base">
          Links might not work all the time. Please search for the content manually.
        </p>
      </div>

      {/* Form */}
      <Card className="max-w-5xl mx-auto mt-10  shadow-lg rounded-2xl p-6 md:p-8 border-none">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-white">
            Customize Your Feed
          </CardTitle>
          <CardDescription className="text-blue-100">
            Tell us what you want to learn.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="industry" className="text-white">Industry</Label>
            <Textarea
              id="industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              placeholder="e.g., Software Engineering, AI"
              className="bg-blue-200/20 border-blue-300 text-white placeholder-white"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="skills" className="text-white">Skills</Label>
            <Textarea
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., React, Next.js, Python, PyTorch"
              className=" bg-blue-200/20 border-blue-300 text-white placeholder-white"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="interests" className="text-white">Interests</Label>
            <Textarea
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., Generative Art, System Design, Robotics"
              className=" bg-blue-200/20 border-blue-300 text-white placeholder-white"
            />
          </div>
        </CardContent>
        <CardFooter className="mt-4">
          <Button
            onClick={handleGenerateFeed}
            disabled={loading}
            size="lg"
            className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 text-white"
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-5 w-5" />
            )}
            {loading ? "Generating..." : "Generate Feed"}
          </Button>
        </CardFooter>
      </Card>

      {/* Feed */}
      <div className="max-w-6xl mx-auto mt-10 space-y-6">
        {loading && (
          <div className="text-center p-8">
            <Loader2 className="mx-auto mb-4 h-16 w-16 animate-spin text-blue-400" />
            <p className="text-gray-300 text-lg">Generating your feed...</p>
          </div>
        )}

        {!loading && feed.length === 0 && (
          <div className="rounded-2xl border-2 border-dashed border-blue-300 p-8 text-center text-blue-100">
            <Library className="mx-auto mb-4 h-16 w-16" />
            <p>Your feed is empty. Fill out the form above to start.</p>
          </div>
        )}

        {!loading && feed.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {feed.map((item, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="space-y-2 p-4">
                  <CardTitle className="text-lg md:text-xl font-bold text-blue-400">{item.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{item.type}</Badge>
                    <Badge variant="outline">{item.source}</Badge>
                    <Badge variant="outline">{item.time}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow p-4 space-y-2">
                  <ul className="list-inside list-disc text-sm md:text-base text-gray-300 space-y-1">
                    {item.summary.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <h4 className="mb-1 text-sm font-semibold text-blue-200">Relevance</h4>
                    <p className="text-sm italic text-gray-400">{item.relevance}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild variant="secondary" size="sm" className="w-full hover:bg-blue-600 hover:text-white transition-colors">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
