



// import React, { Component } from "react";
// import { Box, Typography, TextField, Button } from "@mui/material";
// import todoStyles from "./Home.Styles";
// import TodoItem from "../todo-item/TodoItem";
// import toast, { Toaster } from "react-hot-toast";

// interface TodoObject {
//     todoId: number;
//     taskName: string;
//     isTaskCompleted: boolean;
//     taskNum: string;
//     taskDescription: string;
// }

// interface IState {
//     todosList: TodoObject[];
//     errorMsg: string;
//     editedArray: [boolean, null | number];
//     enteredTaskName: string;
//     taskNumber: string;
//     enteredTaskDescription: string;
// }


// class Todo extends Component<{}, IState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             enteredTaskName: "",
//             todosList: [],
//             errorMsg: "",
//             editedArray: [false, null],
//             taskNumber: "",
//             enteredTaskDescription: "",
//         };
//     }

//     renderToastDisplay = (taskNumber: string, message: string) => {
//         console.log(taskNumber, message)
//         return (
//             <div>
//                 <p>taskNumber: {taskNumber}. {message}</p>
//             </div>
//         );
//     }

//     notify = (taskNumber: string, message: string) => {
//         console.log("notification");
//         toast(this.renderToastDisplay(taskNumber, message));
//     }


//     errorHandlingFunction = (errorMessage: string) => {
//         this.setState({ errorMsg: `*${errorMessage}` });
//     };

//     addTodoHandler = () => {
//         const { enteredTaskName, todosList, taskNumber, enteredTaskDescription } = this.state;

//         const addTodoToTheTodoList = () => {
//             const newTodoObj: TodoObject = {
//                 todoId: todosList.length + 1,
//                 taskName: enteredTaskName,
//                 isTaskCompleted: false,
//                 taskNum: taskNumber,
//                 taskDescription: enteredTaskDescription
//             };
//             this.setState({
//                 todosList: [...this.state.todosList, newTodoObj],
//                 errorMsg: "",
//                 enteredTaskName: "",
//                 taskNumber: "",
//                 enteredTaskDescription: "",
//             });
//             this.notify(taskNumber, "created Successfully");
//         };

//         if (enteredTaskName.trim().length === 0) {
//             this.errorHandlingFunction("*Please Enter Valid Task Name");
//         }
//         else {
//             addTodoToTheTodoList();
//         }
//     };

//     deleteTodoHandler = (todoId: number, taskNumber: string) => {
//         const { todosList, } = this.state;
//         const updatedTodoListWithDeletedTodoItem = todosList.filter(
//             (eachTodo: TodoObject) => eachTodo.todoId !== todoId
//         );
//         this.setState({ todosList: updatedTodoListWithDeletedTodoItem });
//         this.notify(`${taskNumber}`, "Deleted Successfully");
//     };

//     saveEditedTodoEventHandler = (todoId: number, editedTodoTaskName: string, taskNum: string,
//         taskDescription: string,) => {
//         this.setState({
//             enteredTaskName: editedTodoTaskName,
//             editedArray: [true, todoId],
//             errorMsg: "",
//             taskNumber: taskNum,
//             enteredTaskDescription: taskDescription,
//         });
//     };

//     updateEditedTodoHandler = () => {
//         const { enteredTaskName, editedArray, todosList, taskNumber } = this.state;
//         if (enteredTaskName === "") {
//             this.errorHandlingFunction("*Please Enter Valid Task Name");
//         } else {
//             const updatedTodoList = todosList.map((eachTodo) => {
//                 if (eachTodo.todoId === editedArray[1]) {
//                     return {
//                         ...eachTodo,
//                         taskName: enteredTaskName,
//                         taskNum: this.state.taskNumber,
//                         taskDescription: this.state.enteredTaskDescription
//                     };
//                 }
//                 return eachTodo;

//             });
//             this.setState({
//                 editedArray: [false, null],
//                 todosList: updatedTodoList,
//                 errorMsg: "",
//                 enteredTaskName: "",
//                 taskNumber: "",
//                 enteredTaskDescription: "",

//             });
//             this.notify(`${taskNumber}`, "Updated Successfully");
//         }
//     };

//     userEnteredInputEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value } as unknown as Pick<IState, keyof IState>);
//     }


//     render() {
//         const { enteredTaskName, errorMsg, todosList, editedArray, enteredTaskDescription, taskNumber } = this.state;
//         return (
//             <>

//                 <Box sx={todoStyles.todosMainContainer}>
//                     <Toaster />
//                     <Box sx={todoStyles.todosChildContainer}>
//                         <Typography component="h1" sx={todoStyles.todosHeading}>
//                             Todos Application
//                         </Typography>
//                         <Box sx={todoStyles.createTaskContainer}>
//                             <Typography component="h2" sx={todoStyles.createTaskHeading}>
//                                 Create
//                                 <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
//                                     Task
//                                 </Box>
//                             </Typography>
//                             <TextField
//                                 type="text"
//                                 placeholder="Enter Task Number."
//                                 sx={todoStyles.todoUserInput}
//                                 onChange={this.userEnteredInputEventHandler}
//                                 value={taskNumber}
//                                 inputProps={{ 'data-testid': "input-field" }}
//                                 name="taskNumber"
//                             />
//                             {errorMsg && (
//                                 <Typography component="p" sx={todoStyles.errorMsg} data-testid="error-message">
//                                     {errorMsg}
//                                 </Typography>
//                             )}
//                             <TextField
//                                 type="text"
//                                 placeholder="Enter Task Name."
//                                 sx={todoStyles.todoUserInput}
//                                 onChange={this.userEnteredInputEventHandler}
//                                 value={enteredTaskName}
//                                 inputProps={{ 'data-testid': "input-field" }}
//                                 name="enteredTaskName"
//                             />
//                             <TextField
//                                 type="text"
//                                 placeholder="Enter Task Description."
//                                 sx={todoStyles.todoUserInput}
//                                 onChange={this.userEnteredInputEventHandler}
//                                 value={enteredTaskDescription}
//                                 inputProps={{ 'data-testid': "input-field" }}
//                                 name="enteredTaskDescription"
//                             />
//                             {!editedArray[0] ? (
//                                 <Button
//                                     onClick={this.addTodoHandler}
//                                     sx={todoStyles.todoButton}
//                                     type="button"
//                                     disableFocusRipple
//                                     disableRipple
//                                     disableTouchRipple
//                                     disableElevation
//                                     data-testid="add-button"
//                                 >
//                                     Add
//                                 </Button>
//                             ) : (
//                                 <Button
//                                     disableFocusRipple
//                                     disableRipple
//                                     disableTouchRipple
//                                     disableElevation
//                                     onClick={this.updateEditedTodoHandler}
//                                     data-testid="update-button"
//                                     sx={{
//                                         ...todoStyles.todoButton,
//                                         ...todoStyles.updateBtn
//                                     }}
//                                 >
//                                     Update
//                                 </Button>
//                             )}
//                         </Box>
//                         <Box sx={todoStyles.createTaskContainer}>
//                             <Typography component="h2" sx={todoStyles.createTaskHeading}>
//                                 My
//                                 <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
//                                     Tasks
//                                 </Box>
//                             </Typography>
//                         </Box>
//                         <Box component="ul" sx={todoStyles.unorderedList} data-testid="unorderd-list">
//                             {todosList.map((eachTodo: TodoObject) => (
//                                 <TodoItem
//                                     key={eachTodo.todoId}
//                                     eachTodo={eachTodo}
//                                     deleteTodoHandler={this.deleteTodoHandler}
//                                     saveEditedTodoEventHandler={this.saveEditedTodoEventHandler}
//                                 />
//                             ))}
//                         </Box>
//                     </Box>
//                 </Box>
//             </>
//         );
//     }
// }


// export default Todo;







import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import todoStyles from "./Home.Styles";
import TodoItem from "../todo-item/TodoItem";
import toast, { Toaster } from "react-hot-toast";

interface TodoObject {
    todoId: number;
    taskName: string;
    isTaskCompleted: boolean;
    taskNum: string;
    taskDescription: string;
}

const Todo: React.FC = () => {
    const [todosList, setTodosList] = useState<TodoObject[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [editedArray, setEditedArray] = useState<[boolean, null | number]>([false, null]);
    const [enteredTaskName, setEnteredTaskName] = useState<string>("");
    const [taskNumber, setTaskNumber] = useState<string>("");
    const [enteredTaskDescription, setEnteredTaskDescription] = useState<string>("");

    const renderToastDisplay = (taskNumber: string, message: string) => {
        console.log(taskNumber, message);
        return (
            <Box >
                <p>taskNumber: {taskNumber}. {message}</p>
            </Box>
        );
    };

    const notify = (taskNumber: string, message: string) => {
        console.log("notification");
        toast(renderToastDisplay(taskNumber, message));
    };

    const errorHandlingFunction = (errorMessage: string) => {
        setErrorMsg(`*${errorMessage}`);
    };

    const addTodoHandler = () => {
        if (enteredTaskName.trim().length === 0) {
            errorHandlingFunction("*Please Enter Valid Task Name");
            return;
        }

        const newTodoObj: TodoObject = {
            todoId: todosList.length + 1,
            taskName: enteredTaskName,
            isTaskCompleted: false,
            taskNum: taskNumber,
            taskDescription: enteredTaskDescription,
        };

        setTodosList([...todosList, newTodoObj]);
        setErrorMsg("");
        setEnteredTaskName("");
        setTaskNumber("");
        setEnteredTaskDescription("");
        notify(taskNumber, "created Successfully");
    };

    const deleteTodoHandler = (todoId: number, taskNumber: string) => {
        const updatedTodoListWithDeletedTodoItem = todosList.filter(
            (eachTodo: TodoObject) => eachTodo.todoId !== todoId
        );
        setTodosList(updatedTodoListWithDeletedTodoItem);
        notify(taskNumber, "Deleted Successfully");
    };

    const saveEditedTodoEventHandler = (
        todoId: number, editedTodoTaskName: string, taskNum: string, taskDescription: string
    ) => {
        setEnteredTaskName(editedTodoTaskName);
        setEditedArray([true, todoId]);
        setErrorMsg("");
        setTaskNumber(taskNum);
        setEnteredTaskDescription(taskDescription);
    };

    const updateEditedTodoHandler = () => {
        if (enteredTaskName === "") {
            errorHandlingFunction("*Please Enter Valid Task Name");
            return;
        }

        const updatedTodoList = todosList.map((eachTodo) => {
            if (eachTodo.todoId === editedArray[1]) {
                return {
                    ...eachTodo,
                    taskName: enteredTaskName,
                    taskNum: taskNumber,
                    taskDescription: enteredTaskDescription,
                };
            }
            return eachTodo;
        });

        setTodosList(updatedTodoList);
        setEditedArray([false, null]);
        setEnteredTaskName("");
        setTaskNumber("");
        setEnteredTaskDescription("");
        notify(taskNumber, "Updated Successfully");
    };

    const userEnteredInputEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        switch (name) {
            case "enteredTaskName":
                setEnteredTaskName(value);
                break;
            case "taskNumber":
                setTaskNumber(value);
                break;
            case "enteredTaskDescription":
                setEnteredTaskDescription(value);
                break;
        }
    };

    return (
        <>
            <Box sx={todoStyles.todosMainContainer}>
                <Toaster />
                <Box sx={todoStyles.todosChildContainer}>
                    <Typography component="h1" sx={todoStyles.todosHeading}>
                        Todos Application
                    </Typography>
                    <Box sx={todoStyles.createTaskContainer}>
                        <Typography component="h2" sx={todoStyles.createTaskHeading}>
                            Create
                            <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
                                Task
                            </Box>
                        </Typography>
                        <TextField
                            type="text"
                            placeholder="Enter Task Number."
                            sx={todoStyles.todoUserInput}
                            onChange={userEnteredInputEventHandler}
                            value={taskNumber}
                            inputProps={{ 'data-testid': "input-field" }}
                            name="taskNumber"
                        />
                        {errorMsg && (
                            <Typography component="p" sx={todoStyles.errorMsg} data-testid="error-message">
                                {errorMsg}
                            </Typography>
                        )}
                        <TextField
                            type="text"
                            placeholder="Enter Task Name."
                            sx={todoStyles.todoUserInput}
                            onChange={userEnteredInputEventHandler}
                            value={enteredTaskName}
                            inputProps={{ 'data-testid': "input-field" }}
                            name="enteredTaskName"
                        />
                        <TextField
                            type="text"
                            placeholder="Enter Task Description."
                            sx={todoStyles.todoUserInput}
                            onChange={userEnteredInputEventHandler}
                            value={enteredTaskDescription}
                            inputProps={{ 'data-testid': "input-field" }}
                            name="enteredTaskDescription"
                        />
                        {!editedArray[0] ? (
                            <Button
                                onClick={addTodoHandler}
                                sx={todoStyles.todoButton}
                                type="button"
                                disableFocusRipple
                                disableRipple
                                disableTouchRipple
                                disableElevation
                                data-testid="add-button"
                            >
                                Add
                            </Button>
                        ) : (
                            <Button
                                disableFocusRipple
                                disableRipple
                                disableTouchRipple
                                disableElevation
                                onClick={updateEditedTodoHandler}
                                data-testid="update-button"
                                sx={{
                                    ...todoStyles.todoButton,
                                    ...todoStyles.updateBtn
                                }}
                            >
                                Update
                            </Button>
                        )}
                    </Box>
                    <Box sx={todoStyles.createTaskContainer}>
                        <Typography component="h2" sx={todoStyles.createTaskHeading}>
                            My
                            <Box component="span" sx={todoStyles.createTaskHeadingSubpart}>
                                Tasks
                            </Box>
                        </Typography>
                    </Box>
                    <Box component="ul" sx={todoStyles.unorderedList} data-testid="unorderd-list">
                        {todosList.map((eachTodo: TodoObject) => (
                            <TodoItem
                                key={eachTodo.todoId}
                                eachTodo={eachTodo}
                                deleteTodoHandler={deleteTodoHandler}
                                saveEditedTodoEventHandler={saveEditedTodoEventHandler}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Todo;
