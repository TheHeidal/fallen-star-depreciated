import React, { useId } from "react";

export interface CircularTextProps
  extends React.SVGTextElementAttributes<SVGTextElement> {
  radius: number;
  children?: React.ReactNode;
  inverted?: boolean;
}

/**
 * A line of text curving around a circle, centered at 0, -radius
 */
export default function CircularText({
  radius,
  children,
  inverted = false,
  ...props
}: CircularTextProps) {
  const id = useId();
  return (
    <>
      <path
        className="fill-none"
        id={id}
        d={`M 0 ${radius}
            A 1 1 0 1 ${inverted ? "0" : "1"} 0 ${-radius}
            A 1 1 0 1 ${inverted ? "0" : "1"} 0 ${radius}
            `}
      />
      <text textAnchor="middle" {...props}>
        <textPath startOffset="50%" href={`#${id}`}>
          {children}
        </textPath>
      </text>
    </>
  );
}
