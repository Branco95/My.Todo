import React from 'react';
import { Button as ButtonMaterial } from "@material-tailwind/react";
import { colors } from '@material-tailwind/react/types/generic';
import { ButtonProps } from '@material-tailwind/react';

interface ButtonProp extends ButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: colors;
    icon?: React.ReactNode;
}

const Button = ({ children, icon, color, ...props }: ButtonProp) => {

    const { ref, ...restProps } = props;

    return (
        <ButtonMaterial
            color={color}
            variant="gradient"
            className="flex items-center p-2 shadow-md sm:text-end w-full lg:w-52 mt-2 lg:mt-0 overflow-hidden"
            {...restProps} // Spread the rest of the props, without `ref`
        >
            {icon && <div className="mr-2">{icon}</div>}
            <span className="flex-1 truncate text-center ">{children}</span>

        </ButtonMaterial>
    );
}

export default Button;
