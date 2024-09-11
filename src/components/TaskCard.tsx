import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Tooltip
} from "@material-tailwind/react";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { GrTasks } from "react-icons/gr";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TaskCardProps } from '../types';



const TaskCard = ({ data, onDelete, state }: TaskCardProps) => {



    return (
        <>
            <div className="p-4 w-full max-w-md " >
                <div className={`flex rounded-lg border-gray-300 border min-h-[250px] max-h-[250px] w-full md:min-w-0 md:max-w-full ${data.completed ? 'bg-green-100' : ''} p-8 flex-col cursor-pointer shadow-lg transition-all duration-700 hover:scale-110`}>
                    <div className="flex items-center mb-3">
                        <div
                            className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                            <GrTasks />
                        </div>
                        <Tooltip content={data.title} >
                            <h2 className="text-black text-sm font-bold line-clamp-2"> {data.title} </h2>
                        </Tooltip>
                    </div>
                    <div className="flex flex-col justify-between flex-grow gap-4">
                        <Tooltip content={data.description}>
                            <p className="leading-relaxed text-base text-gray-700 dark:text-gray-300 line-clamp-2">
                                {data.description}
                            </p>
                        </Tooltip>
                        <div className="">
                            <div className={`${data.completed ? 'border-t-blue-gray' : 'border-t-blue-gray-100'} border-t flex`}>
                                <div>
                                    <p className={`${data.completed ? 'text-white' : 'text-blue-gray-100'}  text-sm`}> {data.dateTime}</p>
                                </div>
                                <div className="flex ml-auto  items-center">
                                    <Tooltip content={data.completed ? "Undone?" : "Done?"}>
                                        <div >
                                            {
                                                data.completed ?
                                                    <FaCheckCircle
                                                        color="green"
                                                        onClick={() => state(data.id)}
                                                        className="transition-all duration-700 hover:scale-110"
                                                    /> :
                                                    <GoCheckCircle
                                                        color="gray"
                                                        onClick={() => state(data.id)}
                                                        className="transition-all duration-700 hover:scale-110"
                                                    />
                                            }
                                        </div>
                                    </Tooltip>
                                    <Tooltip content="Delete Task?">
                                        <div >
                                            <GoTrash
                                                color="red"
                                                onClick={() => onDelete(data.id)}
                                                className="transition-all duration-700 hover:scale-110"
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskCard