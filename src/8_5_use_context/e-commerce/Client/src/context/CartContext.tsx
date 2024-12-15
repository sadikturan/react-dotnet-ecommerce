import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Cart } from "../model/ICart";

interface CartContextValue {
    cart: Cart | null;
    setCart: (cart : Cart) => void;
    deleteItem: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCartContext() {
    const context = useContext(CartContext);

    if(context === undefined) {
        throw new Error("no provider");
    }

    return context;
}

export function CartContextProvider({children}: PropsWithChildren<any>) {
    const [cart, setCart] = useState<Cart | null>(null);

    function deleteItem(productId: number, quantity: number) { 

    }

    return (
        <CartContext.Provider value={{cart, setCart, deleteItem }}>
            {children}
        </CartContext.Provider>
    );
}

