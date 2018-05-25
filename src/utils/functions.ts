/**
 * fromat products
 * @param products
 */
export const formatProducts = (products: any) => {
  return products.data.map((item: any) => {
    return {
      ...item.product
    };
  });
};
