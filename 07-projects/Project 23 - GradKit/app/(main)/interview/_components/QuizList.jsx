"use client";

import { useState } from "react";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import QuizResult from "./QuizResult";
import { ArrowRight } from "lucide-react";

export default function QuizList({ assessments }) {
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <>
      <Card className="border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white shadow-lg">
        <CardHeader className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <CardTitle className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold tracking-tight">
              Recent Quizzes
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm md:text-base">
              Review your previous quiz performances
            </CardDescription>
          </div>
          <Button
            onClick={() => router.push("/interview/mock")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-all duration-300"
          >
            Start New Quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="pt-6">
          <div className="space-y-4">
            {assessments?.length > 0 ? (
              assessments.map((assessment, i) => (
                <Card
                  key={assessment.id}
                  onClick={() => setSelectedQuiz(assessment)}
                  className="cursor-pointer bg-gradient-to-r from-gray-900/60 to-gray-800/50 hover:from-blue-950 hover:to-black transition-all duration-300 border border-white/10 hover:border-blue-500/50"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Quiz {i + 1}
                      </CardTitle>
                      <span className="text-gray-400 text-sm">
                        {format(
                          new Date(assessment.createdAt),
                          "MMMM dd, yyyy • HH:mm"
                        )}
                      </span>
                    </div>
                    <CardDescription className="flex justify-between items-center mt-1 text-gray-300">
                      <span>
                        <strong className="text-cyan-400">
                          {assessment.quizScore.toFixed(1)}%
                        </strong>{" "}
                        score
                      </span>
                      {assessment.improvementTip && (
                        <span className="italic text-sm text-gray-400">
                          “{assessment.improvementTip}”
                        </span>
                      )}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))
            ) : (
              <p className="text-gray-400 text-center py-10">
                No quizzes taken yet. Start your first one now!
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gray-950 via-gray-900 to-black border border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quiz Summary
            </DialogTitle>
          </DialogHeader>
          <QuizResult
            result={selectedQuiz}
            hideStartNew
            onStartNew={() => router.push("/interview/mock")}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
