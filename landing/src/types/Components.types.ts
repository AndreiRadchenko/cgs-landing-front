import React from "react";
import { IImage } from "./Admin/Admin.types";

export interface IDateInput {
  name: string;
  value: string;
  onChange: (e?: string | React.ChangeEvent<any>) => void;
  header: string;
  type: string;
  style?: any;
}

export interface ILoaderProps {
  active?: boolean;
  children?: React.ReactNode;
  text?: string;
  isPortfolio?: boolean;
  className?: string;
  isBlog?: boolean;
}

export interface IPaginationBar {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  scrollFunction: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITechnologyCategoryProps {
  img: string;
  title: string;
  text: string;
  stack: string[];
  idx: number;
  className?: string;
}

export interface ITestimonial {
  slideTitle: string;
  stars: number;
  name: string;
  company: string;
  videoUrl: string;
  slideBanner: IImage;
  text: string;
  link: string;
}

export interface ITestimonialsModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  testimonial: ITestimonial;
}

export interface ITestimonialsSlideProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subtitle: string;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  slideNum: number;
  testimonialImg: string;
  stars: number;
}
