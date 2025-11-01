export interface ButtonProps {
  label: string; // button text
  onClick?: () => void; // optional click event
  disabled?: boolean; // disable state
  variant?: "primary" | "secondary" | "outline"; // style variants
  type?: "button" | "submit" | "reset"; // button type
  className?: string; // for custom styling
}
export interface CardProps {
  title: string; // card title
  description: string; // card description
  imageUrl?: string; // optional image URL
  onAction?: () => void; // optional action callback
}
