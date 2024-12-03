import { IProduct } from "../model/IProduct";

interface Props {
    product: IProduct
}

export default function Product({product}: Props) {
    return (
      <>
        { product.isActive ? (
          <div>
            <h3>{ product.name }</h3>
            <p> { product.price }</p>
          </div>
        ) : <p>ürün satışta değil</p>
        }
      </>
    );
  }
  