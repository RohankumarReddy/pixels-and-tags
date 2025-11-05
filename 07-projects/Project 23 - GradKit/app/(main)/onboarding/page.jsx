import { redirect } from "next/navigation";
import { industries } from "@/app/data/industries";
import { getUserOnboardingStatus } from "@/actions/user";
import OnboardingForm from "@/app/(main)/onboarding/_components/OnboardingForm";

export default async function OnboardingPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  );
}
