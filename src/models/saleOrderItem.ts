import {Table, Model} from "sequelize-typescript"

@Table({
    timestamps: false,
    tableName: "saleorderitem"
})
export class SaleOrderItem extends Model {
    id!: number;
    quantity!: number;
    unitPrice!: number;
    totalPrice!: number;
    productId!: number;
    itemOrderId!: number;
}