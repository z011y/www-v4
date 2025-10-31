import { CareerCompany } from "@/models/careerModel";
import Position from "@/components/Position";
import { Dispatch, SetStateAction } from "react";

type CompanyProps = {
  company: CareerCompany;
  setFocusedProject: Dispatch<SetStateAction<number>>;
};

export default function Company({ company, setFocusedProject }: CompanyProps) {
  return (
    <div className="px-8 lg:w-2/3 lg:px-16">
      <div className="mt-8 flex items-center gap-x-4">
        <h2>{company.name}</h2>
        <p className="text-sm opacity-60">{`${company.startDate} - ${company.endDate}`}</p>
      </div>
      {company.positions.map((position) => (
        <Position
          key={position.id}
          position={position}
          setFocusedProject={setFocusedProject}
        />
      ))}
    </div>
  );
}
