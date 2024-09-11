import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import { toast } from 'react-toastify';
import { GoTrash } from "react-icons/go";
import { on } from 'events';
import { TaskProps } from '../types';


export default function Tasks({ data, onDeleteTask, onCompletedTask }: TaskProps) {

    const notify = () => toast.error('Task was deleted', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon() {
            return (
                <div className="bg-red-500 rounded-full p-1 ">
                    <GoTrash color="white" />
                </div>
            );
        },
    });;


    const handleDeleteTask = (id: string) => {
        //call the onDeleteTask function passed from the parent component
        onDeleteTask(id);
        notify();
    }

    return (
        <div className=''>
            <div className="flex flex-wrap justify-center lg:justify-start">
                {data.map((task: any) => {
                    return (
                        <div key={task.id} className='w-full  md:w-1/3 lg:w-1/4 xl:w-1/5 '>
                            <TaskCard data={task} onDelete={handleDeleteTask} state={onCompletedTask} />
                        </div>
                    );
                })}
                {/* <div className='  md:w-2/4 lg:w-1/5 xl:w-1/6 '><TaskCard /></div> */}
            </div>
        </div>
    )
}
