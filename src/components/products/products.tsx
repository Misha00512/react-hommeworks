import React, {FC} from 'react';
import {apiProductObject} from "../../data";
import {IProductmodel} from "../models/IProductmodel";

const Products: FC = () => {
    const products: IProductmodel[] = apiProductObject.products
    return (
        <div>
            {}
        </div>
    );
};

export default Products;