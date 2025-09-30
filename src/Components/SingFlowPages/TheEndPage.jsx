import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from "primereact/inputmask";
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';
import Profil from './../../assets/img/MaskGroup.png';
import { RiArrowLeftWideLine } from "react-icons/ri";

function TheEndPage() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [value, setValue] = useState();
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };



  return (
<div className="w-[794px] px-[50px] pt-[44px] pb-[50px] rounded-[10px] shadow-[0px_4px_45px_0px_#0000001F] sm:px-[118px] mx-[50px]">
        <div>
          <h2 className="text-[20px] font-bold mb-[37px] sm:text-[20px] text-center">
            Create profile
          </h2>
            <div>
                <div className='mb-[25px] '>
                    <div className='flex justify-between items-center '>
                        <RiArrowLeftWideLine />
                        <h2>6/8</h2>
                    </div>
                    <div className='bg-[#F2F2F2] rounded-[100px] mt-[42px]'><div className='w-[80%] border-[5px] border-[#FF4C4A] rounded-[100px]'></div></div>
                </div>
                <h2 className='text-[16px] font-semibold mb-[18px] text-[#2A1E17] sm:text-[26px]'>Add contact information.</h2>
                <p className='text-[10px] mb-[40px] text-[#554B45] sm:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.</p>

                <div>
                    <div className='flex justify-center gap-[42px] items-center flex-wrap'>
                        <div>
                            <img src={Profil} className='mb-[23px] mx-auto' alt="" />
                            <button className='px-[57px] py-[14px] border rounded-[100px] border-[#D9D9D9] text-[#FF4C4A]'>+  Upload photo</button>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-wrap'>
                                <div className='flex flex-wrap w-full justify-between gap-[20px]'>
                                    <label>
                                        First Name <br />
                                        <input type="text" className='pl-[10px] py-[12px] bg-[#EDEDED] rounded-[10px] border mt-[12px] focus:outline-0' placeholder='Adam'/>
                                    </label>
                                    <label>
                                        Last Name <br />
                                        <input type="text" className='pl-[10px] py-[12px] bg-[#EDEDED] rounded-[10px] border mt-[12px] focus:outline-0' placeholder='Smith'/>
                                    </label>
                                </div>

                                <label className='w-full mt-[20px]'>
                                    Address* 
                                    <input type="text" className='pl-[10px] py-[12px] border rounded-[10px] w-full mt-[20px]' placeholder='Address'/>
                                </label>

                                <div className='flex flex-wrap gap-[20px] mt-[20px] w-full'>
                                    <label className="w-full lg:max-w-[268px]">
                                        City Name*
                                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="w-full mt-[12px]" />
                                    </label>
                                    <label className="w-full lg:max-w-[268px]">
                                        Country*
                                        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                                            valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full mt-[12px]" panelFooterTemplate={panelFooterTemplate} 
                                            dropdownIcon={(opts) => {
                                                return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                                            }}/>                                    </label>
                                    <label className="w-full lg:max-w-[268px]">
                                        Zip code/ Pincode
                                        <input type="password" className="pl-[16px] py-[12px] w-full border focus:outline-0 rounded-[10px] border-[#B3B3B3] mt-[12px]" placeholder="Enter code"/>
                                    </label>
                                    <label className="w-full lg:max-w-[268px]">
                                        <h2 className="mb-[12px]">Phone number</h2>
                                        <InputMask className="bg-white w-full" value={value} onChange={(e) => setValue(e.target.value)} mask="+999-99-9999999"  placeholder="+999-99-9999999"/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="flex justify-center items-center">
          <button className="text-[14px] text-center mt-[46px] bg-[#FF4C4A] text-white font-semibold px-[92px] py-[12px] rounded-[100px] text-nowrap sm:text-[16px]">
            Next
          </button>
        </div>
        </div>
      </div>
  )
}

export default TheEndPage
