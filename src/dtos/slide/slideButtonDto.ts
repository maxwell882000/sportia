import { ReactNode } from "react";

export interface SlideButtonDto {
  id: string;
  icon: ReactNode | string;
  name: string;
  bgColor: string;
  isActive: boolean;
}
