"use client";

import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";

interface ComparisonRow {
  feature: string;
  values: (boolean | string)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  title?: string;
  highlightColumn?: number;
}

export function ComparisonTable({
  headers,
  rows,
  title,
  highlightColumn,
}: ComparisonTableProps) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold text-zacon-navy mb-4">{title}</h3>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-zacon-navy border-b border-gray-200">
                Característica
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={cn(
                    "px-4 py-3 text-center text-sm font-semibold border-b border-gray-200",
                    highlightColumn === index
                      ? "bg-zacon-corporate/10 text-zacon-corporate"
                      : "text-zacon-navy"
                  )}
                >
                  {header}
                  {highlightColumn === index && (
                    <span className="block text-xs font-normal mt-0.5">
                      Recomendado
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-4 py-3 text-sm text-zacon-graphite">
                  {row.feature}
                </td>
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className={cn(
                      "px-4 py-3 text-center",
                      highlightColumn === colIndex && "bg-zacon-corporate/5"
                    )}
                  >
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
        <Check className="w-4 h-4 text-green-600" />
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
        <X className="w-4 h-4 text-red-500" />
      </span>
    );
  }

  if (value === "-" || value === "N/A") {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <Minus className="w-4 h-4 text-gray-400" />
      </span>
    );
  }

  return <span className="text-sm text-zacon-graphite">{value}</span>;
}

// Simple pros/cons comparison
interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="my-6 grid md:grid-cols-2 gap-4">
      <div className="bg-green-50 rounded-xl border border-green-200 p-5">
        <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
          <Check className="w-5 h-5" />
          Vantagens
        </h4>
        <ul className="space-y-2">
          {pros.map((pro, index) => (
            <li
              key={index}
              className="text-sm text-green-700 flex items-start gap-2"
            >
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50 rounded-xl border border-red-200 p-5">
        <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
          <X className="w-5 h-5" />
          Desvantagens
        </h4>
        <ul className="space-y-2">
          {cons.map((con, index) => (
            <li
              key={index}
              className="text-sm text-red-700 flex items-start gap-2"
            >
              <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
