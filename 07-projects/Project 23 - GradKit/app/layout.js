import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { dark } from "@clerk/themes";
    import { Github } from 'lucide-react';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GradKIt",
  description: "GradKit curates personalized learning feeds, courses, and insights tailored to your skills, interests, and career goals — powered by advanced AI.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/90 py-12 mt-6">
  <div className="container mx-auto px-4 text-center text-gray-200">
    <p>© 2025 GradKit. All rights reserved.</p>
    <p>Empowering your career with AI-driven insights and guidance.</p>
    <br />
    <div className="flex items-center justify-center">
     <a 
      href="https://github.com/RohankumarReddy" 
      target="_blank" 
      rel="noopener noreferrer" 
      >
      <Github size={24} color="white" />
      </a>
    </div>
         
  </div>
</footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}