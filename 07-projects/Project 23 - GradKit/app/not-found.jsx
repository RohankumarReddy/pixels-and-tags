import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";

/**
 * Renders a 404 Not Found page.
 * This component is automatically displayed by Next.js when a route is not found.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            {/* Icon to visually indicate an alert or error */}
            <TriangleAlert size={40} />
          </div>
          <CardTitle className="mt-4 text-3xl font-bold">
            404 - Page Not Found
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Oops! It seems you've taken a wrong turn.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The page you are looking for does not exist, has been moved,
            or is temporarily unavailable.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          {/* Button to navigate the user back to the homepage */}
          <Button asChild size="lg">
            <Link href="/">Go Back to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}