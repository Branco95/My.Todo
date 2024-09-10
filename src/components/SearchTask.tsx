import React, { useState } from 'react';
import Button from './Button';
import { IoMdAddCircleOutline } from "react-icons/io";
import { NewTaskModal } from './NewTaskModal';
import DropdownMenu from './DropdownMenu';



interface SearchTaskProps {
    addTask: (title: string, description: string) => void;
    setSearchTerm: (search: string) => void;
    state: (title: string | undefined) => void;
}

const SearchTask = ({ addTask, setSearchTerm, state }: SearchTaskProps) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearch(searchTerm);
        setSearchTerm(searchTerm);
    };

    return (
        <>
            <NewTaskModal isVisible={open} toggleModal={() => setOpen(!open)} newTask={addTask} />
            <div className='p-4 w-full lg:w-6/12' >
                <div className='  lg:flex lg:gap-3 '>
                    <DropdownMenu state={state} />

                    <div className='flex justify-center w-full lg:w-5/6'>
                        <input
                            name="myInput"
                            placeholder='Search task ...'
                            type='text'
                            value={search}
                            onChange={handleSearchChange}
                            className='bg-transparent border-gray-500 border rounded-md p-1 placeholder-blue-gray-400 w-full mt-2 lg:mt-0'
                        />
                    </div>
                    <Button
                        color='blue-gray'
                        icon={<IoMdAddCircleOutline size={20} />}
                        onClick={() => setOpen(true)}
                    >
                        New Task
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SearchTask;
