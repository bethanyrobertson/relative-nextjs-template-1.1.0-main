"use client";

import { CircleCheck, CircleMinus, CircleX } from "lucide-react";
import { useState } from "react";
import SectionHeader from "../section-header";
import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RoleBasedAccess = () => {
  const comparisonData = {
    features: [
      "View Tokens & Components",
      "Search/Filter",
      "Create Tokens & Components",
      "Delete Tokens & Components",
      "Bulk Upload",
      "Export Data",
    ],
    models: [
      {
        name: "Standard User",
        attributes: [
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "No", status: "negative" },
          { value: "No", status: "negative" },
          { value: "No", status: "negative" },
          { value: "Yes", status: "positive" },
        ],
      },
      {
        name: "Admin",
        attributes: [
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
        ],
      },
      {
        name: "API Access",
        attributes: [
          { value: "Yes", status: "positive" },
          { value: "Yese", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
          { value: "Yes", status: "positive" },
        ],
      },
    ],
  };

  const [selectedTab, setSelectedTab] = useState(comparisonData.models[0].name);

  return (
    <section className="py-32">
      <SectionHeader
            category="SOLUTION"
            title="Role-Based Access Control for Design System"
            icon={CircleCheck}
            description="Varying permissions for different user roles"
            className="border-none"
        />  
      <div className="container">
        <Tabs
          defaultValue={comparisonData.models[0].name}
          onValueChange={setSelectedTab}
          className="mb-6 block md:hidden"
        >
          <TabsList className="w-full">
            {comparisonData.models.map((model, idx) => (
              <TabsTrigger key={idx} value={model.name}>
                {model.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="rounded-lg border overflow-hidden">
          <Table className="table-fixed [&_td]:border-r [&_td]:border-b [&_th]:border-r [&_th]:border-b [&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0 [&_tr:last-child_td]:border-b-0">
            <TableHeader>
              <TableRow>
                <TableHead className="sticky top-0 mb-24 w-1/4 bg-muted p-5 text-base font-mono text-foreground font-bold after:absolute after:right-0 after:-bottom-px after:left-0 after:h-px after:bg-border">
                  Feature
                </TableHead>
                {comparisonData.models.map((model, idx) => (
                  <TableHead
                    key={idx}
                    className={cn(
                      "sticky top-0 mb-24 w-1/4 bg-muted p-5 text-center text-base font-mono text-foreground font-bold after:absolute after:right-0 after:-bottom-px after:left-0 after:h-px after:bg-border md:table-cell",
                      model.name !== selectedTab ? "hidden" : "",
                    )}
                  >
                    {model.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.features.map((feature, rowIdx) => (
                <TableRow key={rowIdx}>
                  <TableCell className="p-5 font-bold font-mono text-foreground whitespace-normal">
                    {feature}
                  </TableCell>
                  {comparisonData.models.map((model, colIdx) => (
                    <TableCell
                      key={colIdx}
                      className={cn(
                        "p-5 text-center whitespace-normal md:table-cell",
                        model.name !== selectedTab ? "hidden" : "",
                      )}
                    >
                      <div className="flex flex-col items-center gap-1 text-muted-foreground">
                        {model.attributes[rowIdx].status === "positive" && (
                          <span className="flex size-8 items-center justify-center rounded-full border border-green-200 bg-green-100">
                            <CircleCheck className="size-4 text-green-700" />
                          </span>
                        )}
                        {model.attributes[rowIdx].status === "negative" && (
                          <span className="flex size-8 items-center justify-center rounded-full border border-red-200 bg-red-100">
                            <CircleX className="size-4 text-red-700" />
                          </span>
                        )}
                        {model.attributes[rowIdx].status === "neutral" && (
                          <span className="flex size-8 items-center justify-center rounded-full border border-amber-200 bg-amber-100">
                            <CircleMinus className="size-4 text-amber-700" />
                          </span>
                        )}

                        {model.attributes[rowIdx].value}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { RoleBasedAccess };
