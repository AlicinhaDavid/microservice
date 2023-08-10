import { Router } from "express";
import { Request, Response } from "express";
import { getProducts } from "../../application/getProducts";

const routes = Router();

routes.get("/getProducts", (request: Request, response: Response) => {
  const products = getProducts();
  return response.json(products);
});

export default routes;
