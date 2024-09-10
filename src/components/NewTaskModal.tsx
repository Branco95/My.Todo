import React, { useEffect } from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Textarea,
} from "@material-tailwind/react";

import MyButton from "./Button";



interface ModalProps {
    isVisible: boolean;
    toggleModal: () => void;
    newTask: (title: string, description: string) => void;

}

export function NewTaskModal({ isVisible, toggleModal, newTask }: ModalProps) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

    return (
        <>
            {/* <Button onClick={handleOpen}>Sign In</Button> */}
            <Dialog

                size="md"
                open={isVisible}
                handler={toggleModal}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full ">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            New Task
                        </Typography>
                        <Input label="Title" size="lg"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Textarea label="Description"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <MyButton
                            variant="gradient"
                            onClick={() => {
                                newTask(title, description);
                                setDescription("");
                                setTitle("");
                                console.log("title", title, "description", description);
                                toggleModal();

                            }
                            }
                            className="w-full"
                            disabled={title ? false : true}
                            color="green">
                            Add Task
                        </MyButton>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}