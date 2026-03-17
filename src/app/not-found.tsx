import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <GradientText as="h1" className="font-heading text-8xl font-bold sm:text-9xl">
        404
      </GradientText>
      <h2 className="mt-4 font-heading text-2xl font-semibold text-text sm:text-3xl">
        Page Not Found
      </h2>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8">
        <Button href="/" variant="solid" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
