import { Button, ButtonGroup, Typography } from "@mui/material";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export default function Counter() {
    const count = useAppSelector((state) => state.counter.value); 
    const dispatch = useAppDispatch();

    return (
        <>
            <Typography>{count}</Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment())}>increment</Button>
                <Button onClick={() => dispatch(decrement())}>decrement</Button>
                <Button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</Button>
            </ButtonGroup>
        </>
    );
}