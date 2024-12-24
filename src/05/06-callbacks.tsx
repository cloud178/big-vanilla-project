import React, {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);

        // alert("User have been deleted");
    }

    const saveUser = () => {
        alert("User have been deleted");
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimych
        </textarea>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={'save'} onClick={deleteUser}>x</button>
    </div>
}