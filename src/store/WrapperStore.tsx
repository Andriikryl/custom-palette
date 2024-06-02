"use client";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface WrapperStoreProps {
  children: ReactNode;
}

export default function WrapperStore({ children }: WrapperStoreProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
