import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";

export default function Drop() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const asianCountries = [
    { name: "Afghanistan", code: "AF" },
    { name: "Armenia", code: "AM" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Bhutan", code: "BT" },
    { name: "Brunei", code: "BN" },
    { name: "Cambodia", code: "KH" },
    { name: "China", code: "CN" },
    { name: "Cyprus", code: "CY" },
    { name: "Georgia", code: "GE" },
    { name: "India", code: "IN" },
    { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" },
    { name: "Iraq", code: "IQ" },
    { name: "Israel", code: "IL" },
    { name: "Japan", code: "JP" },
    { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Kuwait", code: "KW" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" },
    { name: "Lebanon", code: "LB" },
    { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" },
    { name: "Mongolia", code: "MN" },
    { name: "Myanmar", code: "MM" },
    { name: "Nepal", code: "NP" },
    { name: "North Korea", code: "KP" },
    { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" },
    { name: "Palestine", code: "PS" },
    { name: "Philippines", code: "PH" },
    { name: "Qatar", code: "QA" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Singapore", code: "SG" },
    { name: "South Korea", code: "KR" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Syria", code: "SY" },
    { name: "Tajikistan", code: "TJ" },
    { name: "Thailand", code: "TH" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Turkey", code: "TR" },
    { name: "Turkmenistan", code: "TM" },
    { name: "United Arab Emirates", code: "AE" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Vietnam", code: "VN" },
    { name: "Yemen", code: "YE" },
  ];

  return (
    <div className="w-full max-w-[600px]">
      <Dropdown
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.value)}
        options={asianCountries}
        optionLabel="name"
        placeholder="Choose your country"
        filter
        filterBy="name"
        panelClassName="rounded-lg shadow-md border border-[#ccc]" 
        className="w-full h-[45px] border border-[#7F7F7F] rounded-md px-4 text-[16px] flex items-center justify-between bg-white"
      />
    </div>
  );
}
