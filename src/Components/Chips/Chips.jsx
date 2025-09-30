import React, { useState } from "react";
import { Chips } from "primereact/chips";
import "primereact/resources/themes/lara-light-blue/theme.css"; // тема PrimeReact
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function SkillsInput() {
  const [skills, setSkills] = useState([]);

  return (
    <div className="w-full max-w-xl">
      <label className="font-bold block mb-2">Your skills</label>
      
      <div className="relative">
        <Chips
          value={skills}
          onChange={(e) => setSkills(e.value)}
          max={15}
          placeholder="Type a skill and press enter"
          className="w-full rounded-[10px] px-2 py-1 shadow-none focus:outline-none focus:ring-0"
        />

        <small className="absolute -bottom-6 right-0 text-gray-500">
          Max 15 skills
        </small>
      </div>

      <style>{`
        .p-chips .p-chips-token {
          background-color: #FF4C4A; 
          color: white;
          border-radius: 9999px; 
          padding: 4px 10px;
          font-size: 14px;
        }
        .p-chips .p-chips-token-icon {
          margin-left: 8px;
          font-size: 12px;
          cursor: pointer;
        }
        .p-chips-input-token input:focus,
        .p-inputtext:enabled:focus {
          outline: none !important;
          box-shadow: none !important;
          border-color: transparent !important;
        }
      `}</style>
    </div>
  );
}
