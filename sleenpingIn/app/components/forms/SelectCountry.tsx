'use client';

import Select from "react-select";
import useCountries from "@/app/components/hooks/useCountries";

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps {
    value: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();
    return (
        <div>
            <Select
                placeholder="Anywhere"
                options={getAll()}
                isSearchable
                
            />
        </div>
    )
}

export default SelectCountry
