import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {ModeToggle} from "@/components/Theme-Switcher";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex-col items-center max-w-3xl">
        {/* <ModeToggle /> */}
        <h1>
          Your marketplace for all high quality{" "}
          <span className="text-blue-600">electronic assets</span>{" "}
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
