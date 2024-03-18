import { Container } from "@/components/Container";
import { EducationModels, EducationModelsType } from "@/constants";
import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import Image from "next/image";
import React from "react";

const atam = Atma({ subsets: ["latin"], weight: "700" });

const page = ({ params }: { params: { educationModelName: string } }) => {
  const formattedModelName = params.educationModelName
    .replace(/([A-Z])/g, " $1")
    .trim();

  // Find the EducationModels object with the matching title
  const educationModel: EducationModelsType | undefined = EducationModels.find(
    (model) => model.title === formattedModelName
  );

  if (!educationModel) {
    // Handle case when no matching education model is found
    return <div>Educational model not found</div>;
  }
  return (
    <main>
      <div className="relative">
        <Image
          src={"/education1.jpg"}
          className="w-full h-[550px] object-cover brightness-75"
          width={8000}
          height={8000}
          alt="education-image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white flex flex-col items-center">
            <p className={cn(atam.className, "text-4xl")}>
              {educationModel.title}
            </p>
            <p className="text-md font-medium">
              AKD <span>KIDS</span>{" "}
              <span className="text-primaryRed">| {educationModel.title}</span>
            </p>
          </div>
        </div>
      </div>
      <Container>
        <div className="mt-20 flex gap-5">
          <Image
            src={educationModel.imageUrl}
            width={800}
            height={750}
            alt="education-1"
          />
          <div className="border-t-2 flex-1 border-primaryRed rounded-md p-5">
            <h1 className={cn(atam.className, "text-3xl")}>Contact us</h1>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default page;
