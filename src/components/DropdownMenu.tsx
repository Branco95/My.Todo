import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

interface DropdownMenuProps {
    state: (title: string | undefined) => void;
}

export default function DropdownMenu({ state }: DropdownMenuProps) {
    const [value, setValue] = useState<string | undefined>("0");

    const handleChange = (value: string | undefined) => {
        console.log("Value here", value);
        setValue(value);
        state(value);
    }


    return (
        <div className="flex w-full lg:w-72 flex-col gap-6">
            <Select
                label="Select State"
                value={value}
                onChange={(val) => handleChange(val)}
                defaultValue="All"
            >
                <Option value="0">All</Option>
                <Option value="false">To be done</Option>
                <Option value="true">Completed</Option>
            </Select>

        </div>
    );
}