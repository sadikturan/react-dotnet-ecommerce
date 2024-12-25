import { Box, Button, Grid2, Paper, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

const steps = ["Teslimat Bilgileri","Ödeme","Sipariş Özeti"];

function getStepContent(step: number)
{
    switch(step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error("Bilinmeyen bir step");
    }
}

export default function CheckoutPage()
{
    const [activeStep, setActiveStep] = useState(0);
    const methods = useForm();

    function handleNext(data: FieldValues) {
        console.log(data);
        setActiveStep(activeStep + 1);
    }

    function handlePrevious() {
        setActiveStep(activeStep - 1);
    }

    return (
        <FormProvider {...methods}>
            <Paper>
                <Grid2 container spacing={4}>
                    <Grid2 size={4} sx={{
                        borderRight: "1px solid",
                        borderColor: "divider",
                        p: 3
                    }}>
                        <Info />
                    </Grid2>
                    <Grid2 size={8} sx={{p:3}}>
                    <Box >
                            <Stepper activeStep={activeStep} sx={{height: 40, mb: 4}}>
                                { steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                    </Box>
                    <Box>
                            {activeStep === steps.length ? (
                                <Stack spacing={2}>
                                    <Typography variant="h1">📦</Typography>
                                    <Typography variant="h5">Teşekkür ederiz. Siparişinizi aldık</Typography>
                                    <Typography variant="body1" sx={{color: "text.secondary"}}>
                                        Sipariş numaranız <strong>#1234</strong>. Siparişiniz onaylandığında size bir eposta göndereceğiz.
                                    </Typography>
                                    <Button 
                                    sx={{alignSelf: "start", 
                                        width: {xs: "100%", sm: "auto"}}}                                    
                                    variant="contained">Siparişleri Listele</Button>
                                </Stack>
                            ) : (
                                <form onSubmit={methods.handleSubmit(handleNext)}>
                                    {getStepContent(activeStep)}
                                    <Box>

                                        <Box sx={
                                            [
                                                {
                                                    display: "flex",
                                                },
                                                activeStep !== 0 
                                                    ? { justifyContent: "space-between" }
                                                    : { justifyContent: "flex-end" }
                                            ]
                                        }>
                                            {
                                                activeStep !== 0 && 
                                                    <Button startIcon={<ChevronLeftRounded />} variant="contained" 
                                                    onClick={handlePrevious}>Geri</Button>
                                            }

                                            <Button
                                                type="submit" 
                                                startIcon={<ChevronRightRounded />} variant="contained">İleri</Button>
                                        </Box>
                                    </Box>
                                </form>
                            )}
                        
                    </Box>
                    </Grid2>
                </Grid2>
            </Paper>
        </FormProvider>

    );
}