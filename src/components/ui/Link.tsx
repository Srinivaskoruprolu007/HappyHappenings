import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function Link({ children, className = '', ...props }: LinkProps) {
  return (
    <a 
      {...props}
      className={`cursor-pointer ${className}`}
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}