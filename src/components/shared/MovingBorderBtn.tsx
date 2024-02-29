"use client";
import React from "react";
import { Button } from "../ui/moving-border";



type MovingBorderBtnProps = {
  title: String
}

export function MovingBorderBtn({ title }: MovingBorderBtnProps) {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-slate-900 text-white border-slate-800"
      >
        {title}
      </Button>
    </div>
  );
}
