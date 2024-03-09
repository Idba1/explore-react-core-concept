// export default function Todo({task}){
//     return(
//         <>
//         <li>Task : {task} </li>
//         </>
//     );
// }


// COnditional rendering Option:1

// export default function Todo({task, isDone}){

//         if(isDone === true){
//             return <li>finished : {task}</li>
//         }
//         else{
//             return <li>work on it. {task}</li>
//         }
    
// }


// // COnditional rendering Option:2

// export default function Todo({task, isDone}){
//         if(isDone === true){
//             return <li>finishe : {task}</li>
//         }
//         return <li>work on it. {task}</li>
// }


// COnditional rendering Option:3
// ternary operator

// export default function Todo({task, isDone}){
//     return (
//         <li>{task}{isDone? "Finished" : "Do it"}</li>
//     );
// }


// COnditional rendering Option:4
// and operator &&

// export default function Todo({task, isDone}){
//     return (
//         <li>{task}{isDone && "Finished"}</li>
//     );
// }


// COnditional rendering Option:4
// or operator ||

export default function Todo({task, isDone}){
    return (
        <li>{task}{isDone || "do it"}</li>
    );
}