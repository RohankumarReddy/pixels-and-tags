"use client";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { features } from "./data/features";
import { Card, CardContent } from "@/components/ui/card";
import { howItWorks } from "./data/howItWorks";
import { faqs } from "./data/faqs";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import  { AccordionTrigger,AccordionContent,Accordion,AccordionItem } from "@radix-ui/react-accordion";
export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />

      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
  {features.map((feature, index) => (
    <Card
      key={index}
      className="p-6 border border-border bg-background/60 backdrop-blur-sm rounded-2xl transition-transform duration-300 hover:bg-background hover:shadow-lg hover:-translate-y-1"
    >
      <CardContent className="flex flex-col items-center text-center space-y-4">
        <div className="text-4xl text-primary">{feature.icon}</div>
        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-muted-foreground">AI Career Assistance</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">100+</h3>
              <p className="text-muted-foreground">Career Roles Supported</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">Unlimited</h3>
              <p className="text-muted-foreground">Resume Creations</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">Global</h3>
              <p className="text-muted-foreground">User Access</p>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">Growing</h3>
              <p className="text-muted-foreground">Community Network</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Follow these four simple steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 border border-border bg-background/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-background hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GradKit</h2>
            <p className="text-muted-foreground">
              Benefits of using our AI-driven career guidance platform
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-4 p-6 border border-border bg-background/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-background hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Personalized Guidance</h3>
              <p className="text-muted-foreground">Tailored career paths and advice for every individual.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-6 border border-border bg-background/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-background hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Expert Insights</h3>
              <p className="text-muted-foreground">Access industry trends, interview tips, and AI-driven insights.</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-6 border border-border bg-background/60 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-background hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1">
              <h3 className="text-xl font-semibold">Achieve Goals Faster</h3>
              <p className="text-muted-foreground">Follow actionable plans to reach your career milestones efficiently.</p>
            </div>
          </div>
        </div>
      </section>

    <section className="w-full py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4 md:px-8">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
    </div>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-border rounded-xl bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <AccordionTrigger
              className="w-full px-6 py-4 text-left text-lg font-medium text-foreground hover:bg-primary/10 data-[state=open]:bg-primary/20 transition-colors duration-300"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 pt-0 text-sm text-muted-foreground/90">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
</section>

<section className="w-full py-16 md:py-24 bg-black">
  <div className="container mx-auto px-4 md:px-8">
    <div className="mx-auto max-w-6xl py-20 px-6 bg-gradient-to-r from-blue-950 to-black rounded-2xl border border-white/10">
      <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Ready to Build Your <span className="text-blue-400">Future</span>?
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl">
          Get started for free and land the job you deserve.
        </p>
        <Link href="/dashboard">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-gray-900 font-bold flex items-center gap-2 
                       shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-white"
          >
            Start Your Career Journey <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>





    </div>
  );
}
