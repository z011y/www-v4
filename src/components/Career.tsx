import { Dispatch, SetStateAction } from "react";
import Company from "./Company";
import { CareerCompany } from "@/models/careerModel";

type CareerProps = {
  companies: CareerCompany[];
  setFocusedProject: Dispatch<SetStateAction<number>>;
};

export default function Career({ companies, setFocusedProject }: CareerProps) {
  return (
    <section id="career" className="flex flex-col items-center pt-28">
      {companies.map((company) => (
        <Company
          key={company.id}
          company={company}
          setFocusedProject={setFocusedProject}
        />
      ))}
    </section>
  );
}
