import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ModeToggle } from "@/components/Theme-Switcher";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex-col items-center max-w-3xl">
        {/* <ModeToggle /> */}
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          Your marketplace for all high quality{" "}
          <span className="text-blue-600">Electronic assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcomoe to Easy-Sell. Every asset on our platform is varified by our
          team to ensure our hightest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
