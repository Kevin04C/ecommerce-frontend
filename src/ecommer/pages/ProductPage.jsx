import { useParams } from "react-router-dom";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const ProductPage = () => {
  const { id } = useParams();

  return (
    <LayoutEcommerce>
      <div>ProductPage {id}</div>
    </LayoutEcommerce>
  );
};
