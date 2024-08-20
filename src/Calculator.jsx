import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setResult("0");
    } else if (value === "=") {
      try {
        setResult(evaluate(result).toString());
      } catch {
        setResult("Abey Laude");
      }
    } else if (value === "DE") {
      setResult((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else {
      setResult((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-600">
      <div className="calculator border border-gray-600 p-5 rounded-lg bg-gray-800 shadow-lg">
        <input
          className="w-96 border-none p-6 mb-2 bg-gray-700 text-white text-4xl text-right shadow-inner"
          type="text"
          value={result}
          readOnly
        />
        <p className="bg-slate-600 text-white text-sm font-medium mt-2 py-1 px-3 rounded-md shadow-md text-right hover:bg-slate-700 transition-all duration-300 ease-in-out">
          AYER's CALCULATOR
        </p>

        <div className="grid grid-cols-4 gap-3 mt-4">
          {[
            { label: "AC", span: "col-span-1" },
            { label: "DE", span: "col-span-1" },
            { label: ".", span: "col-span-1" },
            { label: "/", span: "col-span-1", className: "text-green-400" },
            { label: "7", span: "col-span-1" },
            { label: "8", span: "col-span-1" },
            { label: "9", span: "col-span-1" },
            { label: "*", span: "col-span-1", className: "text-green-400" },
            { label: "4", span: "col-span-1" },
            { label: "5", span: "col-span-1" },
            { label: "6", span: "col-span-1" },
            { label: "-", span: "col-span-1", className: "text-green-400" },
            { label: "1", span: "col-span-1" },
            { label: "2", span: "col-span-1" },
            { label: "3", span: "col-span-1" },
            { label: "+", span: "col-span-1", className: "text-green-400" },
            { label: "00", span: "col-span-1" },
            { label: "0", span: "col-span-1" },
            { label: "=", span: "col-span-2", className: "bg-orange-500" },
          ].map((btn, index) => (
            <button
              key={index}
              className={`w-16 h-16 mx-2 bg-black text-white text-2xl shadow-inner shadow-blue-500 hover:bg-gray-800 transition-all duration-300 ease-in-out ${
                btn.className || ""
              } ${btn.span}`}
              onClick={() => handleClick(btn.label)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
