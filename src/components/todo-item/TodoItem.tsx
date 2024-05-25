// import React, { Component } from "react";
// import { Box } from "@mui/material";
// import todoItemStyles from "./TodoItem.Styles";
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from '@mui/icons-material/Edit';
// import EditOffIcon from '@mui/icons-material/EditOff';


// interface TodoObject {
//     todoId: number;
//     taskName: string;
//     isTaskCompleted: boolean;
//     taskNum: string;
//     taskDescription: string;
// }

// interface IProps {
//     eachTodo: TodoObject;
//     deleteTodoHandler: (id: number, taskNumber: string) => void;
//     saveEditedTodoEventHandler: (
//         todoId: number,
//         editedTodoTaskName: string,
//         taskNum: string,
//         taskDescription: string,
//     ) => void;
// }

// class TodoItem extends Component<IProps> {
//     render() {
//         const { eachTodo, deleteTodoHandler, saveEditedTodoEventHandler } = this.props;
//         return (
//             <Box sx={todoItemStyles.todoItemContainer} data-testid="each-todo-item">
//                 <Box sx={todoItemStyles.labelContainer}>
//                     <Box
//                         component="label"
//                         sx={{
//                             ...todoItemStyles.checkboxLabel,
//                         }}
//                         htmlFor={`checkboxId${eachTodo.todoId}`}
//                     >
//                         {eachTodo.taskNum}. {eachTodo.taskName} -{eachTodo.taskDescription}
//                     </Box>
//                     <Box sx={todoItemStyles.deleteIconContainer}>
//                         <ModeEditIcon
//                             data-testid="edit-button"
//                             sx={todoItemStyles.icon}
//                             onClick={() =>
//                                 saveEditedTodoEventHandler(eachTodo.todoId, eachTodo.taskName, eachTodo.taskNum, eachTodo.taskDescription)
//                             }
//                         />
//                         <DeleteIcon
//                             sx={todoItemStyles.icon}
//                             data-testid="delete-button"
//                             onClick={() => deleteTodoHandler(eachTodo.todoId, eachTodo.taskNum)}
//                         />
//                     </Box>
//                 </Box>
//             </Box>
//         );
//     }
// }

// export default TodoItem;






import React from "react";
import { Box } from "@mui/material";
import todoItemStyles from "./TodoItem.Styles";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoObject {
    todoId: number;
    taskName: string;
    isTaskCompleted: boolean;
    taskNum: string;
    taskDescription: string;
}

interface IProps {
    eachTodo: TodoObject;
    deleteTodoHandler: (id: number, taskNumber: string) => void;
    saveEditedTodoEventHandler: (
        todoId: number,
        editedTodoTaskName: string,
        taskNum: string,
        taskDescription: string,
    ) => void;
}

const TodoItem: React.FC<IProps> = ({ eachTodo, deleteTodoHandler, saveEditedTodoEventHandler }) => {
    return (
        <Box sx={todoItemStyles.todoItemContainer} data-testid="each-todo-item">
            <Box sx={todoItemStyles.labelContainer}>
                <Box
                    component="label"
                    sx={{
                        ...todoItemStyles.checkboxLabel,
                    }}
                    htmlFor={`checkboxId${eachTodo.todoId}`}
                >
                    {eachTodo.taskNum}. {eachTodo.taskName} - {eachTodo.taskDescription}
                </Box>
                <Box sx={todoItemStyles.deleteIconContainer}>
                    <ModeEditIcon
                        data-testid="edit-button"
                        sx={todoItemStyles.icon}
                        onClick={() =>
                            saveEditedTodoEventHandler(eachTodo.todoId, eachTodo.taskName, eachTodo.taskNum, eachTodo.taskDescription)
                        }
                    />
                    <DeleteIcon
                        sx={todoItemStyles.icon}
                        data-testid="delete-button"
                        onClick={() => deleteTodoHandler(eachTodo.todoId, eachTodo.taskNum)}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default TodoItem;
