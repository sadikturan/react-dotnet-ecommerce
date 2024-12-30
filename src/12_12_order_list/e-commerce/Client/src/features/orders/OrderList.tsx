import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Order } from "../../model/IOrder";
import requests from "../../api/requests";
import { currenyTRY } from "../../utils/formatCurrency";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const orderStatus = [ "Pending", "Approved", "PaymentFailed","Completed"];

export default function OrderList()
{
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        requests.Order.getOrders()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if(loading) return <CircularProgress />

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Order Id</TableCell>
                        <TableCell>Order Status</TableCell>
                        <TableCell>Order Date</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell component="th" scope="row">{order.id}</TableCell>
                            <TableCell component="th" scope="row">{orderStatus[order.orderStatus]}</TableCell>
                            <TableCell component="th" scope="row">{new Date(order.orderDate).toLocaleString()}</TableCell>
                            <TableCell component="th" scope="row">{currenyTRY.format(order.subTotal)}</TableCell>
                            <TableCell component="th" scope="row" sx={{width: 100}}>
                                <Button size="small" variant="contained" endIcon={<ArrowRightIcon />}>Details</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}