import { ReactNode } from "react";

export interface SlideButtonDto {
  id: number;
  icon: ReactNode;
  name: string;
  bgColor: string;
  isActive: boolean;
}