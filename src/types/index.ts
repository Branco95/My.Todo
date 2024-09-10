// src/types/index.ts
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TaskCardProps {
    data: Task;
    onDelete: (id: string) => void;
    state: (id: string) => void;
}


export type TaskProps = {
    data: Task[];
    onDeleteTask: (id: string) => void;
    onCompletedTask: (id: string) => void;
}



export type Task = {
    id: string;
    title: string;
    description: string;
    dateTime: string;
    completed: boolean;
}