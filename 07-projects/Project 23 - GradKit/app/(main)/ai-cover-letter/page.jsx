"use client";

import { useState } from "react";
import { generateCoverLetter } from "@/actions/coverletter";
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
import { toast } from "sonner"; // Assuming sonner is available
import { Loader2, Wand2, FileText, Clipboard, Check } from "lucide-react";

// Define the structure of your form data
const formFields = [
  { id: "jobTitle", label: "Job Title", type: "input", placeholder: "e.g., Senior Software Engineer" },
  { id: "companyName", label: "Company Name", type: "input", placeholder: "e.g., Acme Inc." },
  { id: "industry", label: "Industry", type: "input", placeholder: "e.g., Tech, Finance, Healthcare" },
  { id: "jobDescription", label: "Job Description", type: "textarea", placeholder: "Paste the job description here..." },
  { id: "bio", label: "Your Bio / Summary", type: "textarea", placeholder: "A brief summary about you, your goals, and what you do." },
  { id: "experience", label: "Your Key Experience", type: "textarea", placeholder: "Describe your most relevant experience for this role." },
  { id: "skills", label: "Skills (comma-separated)", type: "textarea", placeholder: "e.g., React, Node.js, Project Management" },
];

export default function AICoverLetterPage() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    industry: "",
    experience: "",
    skills: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [copyText, setCopyText] = useState("Copy");

  // A single handler for all form inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  async function handleGenerate() {
    try {
      setLoading(true);
      setCoverLetter(""); // Clear previous letter
      const skillsArray = formData.skills.split(",").map((s) => s.trim()).filter(Boolean);
      
      // Basic validation
      if (!formData.jobTitle || !formData.companyName || !formData.jobDescription) {
        toast.error("Please fill in Job Title, Company Name, and Job Description.");
        setLoading(false);
        return;
      }

      const result = await generateCoverLetter({
        ...formData,
        skills: skillsArray,
      });
      
      setCoverLetter(result); // Display it
      toast.success("Cover letter generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      setCoverLetter("Failed to generate cover letter. Please try again.");
      toast.error("Failed to generate cover letter.");
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = () => {
    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = coverLetter; // The raw string
    
    // Hide the textarea
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      setCopyText("Copied!");
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopyText("Copy"), 2000);
    } catch (err) {
      toast.error("Failed to copy text.");
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="container mx-auto max-w-7xl py-8 md:py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight gradient-title">
          GradKit Cover Letter Generator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2 max-w-2xl mx-auto">
          Fill in the details about you and the job, and let AI craft a
          professional cover letter for you. <span className="font-bold text-white">[Cover letters are not stored in our database]</span>
        </p>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Your Details</CardTitle>
            <CardDescription>
              Provide the context for the AI to write a tailored letter.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g., Senior Software Engineer" value={formData.jobTitle} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="e.g., Acme Inc." value={formData.companyName} onChange={handleChange} />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input id="industry" placeholder="e.g., Tech, Finance, Healthcare" value={formData.industry} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobDescription">Job Description</Label>
              <Textarea id="jobDescription" placeholder="Paste the job description here..." className="h-32" value={formData.jobDescription} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Your Bio / Summary</Label>
              <Textarea id="bio" placeholder="A brief summary about you..." className="h-24" value={formData.bio} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Your Key Experience</Label>
              <Textarea id="experience" placeholder="Describe your most relevant experience..." className="h-24" value={formData.experience} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Textarea id="skills" placeholder="e.g., React, Node.js, Project Management" className="h-24" value={formData.skills} onChange={handleChange} />
            </div>

          </CardContent>
          <CardFooter>
            <Button onClick={handleGenerate} disabled={loading} className="w-full text-lg py-6 shadow-md">
              {loading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-5 w-5" />
              )}
              {loading ? "Generating..." : "Generate Cover Letter"}
            </Button>
          </CardFooter>
        </Card>

        {/* Result Card */}
        <Card className="shadow-lg lg:sticky lg:top-8 min-h-[500px] lg:min-h-[70vh] flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-x-2">
            <div className="space-y-1">
              <CardTitle className="text-2xl">Generated Letter</CardTitle>
              <CardDescription>
                Your AI-crafted letter will appear below.
              </CardDescription>
            </div>
            {coverLetter && !loading && (
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="min-w-[80px]">
                {copyText === "Copy" ? (
                  <Clipboard className="mr-2 h-4 w-4" />
                ) : (
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                )}
                {copyText}
              </Button>
            )}
          </CardHeader>
          <CardContent className="flex-grow relative">
            {/* Loading State */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-b-lg z-10">
                <div className="text-center">
                  <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                  <p className="text-lg text-muted-foreground mt-4">Generating your letter...</p>
                </div>
              </div>
            )}
            
            {/* Empty State */}
            {!loading && !coverLetter && (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
                <FileText className="h-16 w-16 mb-4" />
                <p className="text-lg">Your generated cover letter will be displayed here.</p>
                <p className="text-sm">Fill out the form and click "Generate".</p>
              </div>
            )}

            {/* Result State */}
            {!loading && coverLetter && (
               <div
                className="prose prose-sm dark:prose-invert max-w-none h-full overflow-y-auto p-4 border rounded-md bg-muted/30"
                style={{ minHeight: '400px' }}
                dangerouslySetInnerHTML={{ __html: coverLetter.replace(/\n/g, "<br />") }}
              />
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
