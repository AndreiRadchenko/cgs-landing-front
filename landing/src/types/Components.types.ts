﻿import React from "react";

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
