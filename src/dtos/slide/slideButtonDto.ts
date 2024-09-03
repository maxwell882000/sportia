import { ReactNode } from "react";

export interface SlideButtonDto {
  id: string;
  icon: ReactNode;
  name: string;
  bgColor: string;
  isActive: boolean;
}