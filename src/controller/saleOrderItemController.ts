import { RequestHandler } from "express";
import { SaleOrderItem } from "../models/saleOrderItem";
import { SaleOrder } from "../models/saleOrder";
import { Product } from "../models/product";

export const createSaleOrderItem: RequestHandler = async (req, res, _next) => {
  const item = await SaleOrderItem.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Sale order item created successfully", data: item });
};

export const deleteSaleOrderItem: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const deletedItem: SaleOrderItem | null = await SaleOrderItem.findByPk(id);

  await SaleOrderItem.destroy({ where: { id } });

  return res
    .status(200)
    .json({
      message: "Sale Order Item deleted successfully",
      data: deletedItem,
    });
};

export const getAllSaleOrderItem: RequestHandler = async (_req, res, _next) => {
  const allItems: SaleOrderItem[] = await SaleOrderItem.findAll({
    include: [SaleOrder,Product],
  });

  return res
    .status(200)
    .json({ message: "Sale Order Item fetched successfully", data: allItems });
};

export const getSaleOrderItemById: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  const item: SaleOrderItem | null = await SaleOrderItem.findByPk(id);
  return res
    .status(200)
    .json({ message: "Sale Order Item fetched successfully", data: item });
};

export const updateSaleOrderItem: RequestHandler = async (req, res, _next) => {
  const { id } = req.params;
  await SaleOrderItem.update({ ...req.body }, { where: { id } });
  const updatedItem: SaleOrderItem | null = await SaleOrderItem.findByPk(id);
  return res
    .status(200)
    .json({
      message: "Sale Order Item updated successfully",
      data: updatedItem,
    });
};
