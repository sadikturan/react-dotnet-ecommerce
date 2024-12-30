import { Grid2, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm()
{
    const { register, formState: {errors} } = useFormContext();
    return (
        <Grid2 container spacing={3}>

            <Grid2 size={{xs: 12, md: 6}}>
                 <TextField 
                    {...register("card_name", {required: "Card name is required"})}
                    label="Enter card name" 
                    fullWidth autoFocus 
                    sx={{mb: 2}} 
                    size="small"
                    error={!!errors.card_name}></TextField>
            </Grid2>

            <Grid2 size={{xs: 12 , md: 6}}>
                 <TextField 
                    {...register("card_number", {required: "Card number is required"})}
                    label="Enter card number" 
                    fullWidth 
                    sx={{mb: 2}} 
                    size="small"
                    error={!!errors.card_number}></TextField>
            </Grid2>

            <Grid2 size={{xs: 12 , md: 6}}>
                 <TextField 
                    {...register("card_expiry_date", {required: "Expiry date is required"})}
                    label="Enter expiry date" 
                    fullWidth 
                    sx={{mb: 2}} 
                    size="small"
                    error={!!errors.card_expiry_date}></TextField>
            </Grid2>

            <Grid2 size={{xs: 12 , md: 6}}>
                 <TextField 
                    {...register("card_cvv", {required: "Cvv is required"})}
                    label="Enter cvv" 
                    fullWidth 
                    sx={{mb: 2}} 
                    size="small"
                    error={!!errors.card_cvv}></TextField>
            </Grid2>

        </Grid2>
    );
}