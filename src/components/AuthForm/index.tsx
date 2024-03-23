import Button from "@mui/material/Button/Button"
import { AuthFormPropsType } from "./types"
import { TextField } from "@mui/material"
import styles from './style.module.scss'

export const AuthForm = ({ buttonText }:AuthFormPropsType) => {
    
    return (
        <div className={styles.container}>
            <TextField margin="normal" id="outlined-basic" label="Email" variant="outlined" />
            <TextField
                margin="normal" 
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
            />
            <Button variant="contained">{buttonText}</Button>
        </div>
    )
}