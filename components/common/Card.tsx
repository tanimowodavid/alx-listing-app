import { CardProps } from "@/interfaces/index";

const Card = ({ title, description, imageUrl }: CardProps) => (
  <div>
    {imageUrl && <img src={imageUrl} alt={title} />}
    <h3>{title}</h3>
    {description && <p>{description}</p>}
  </div>
);
