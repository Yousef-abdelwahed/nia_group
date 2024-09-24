import React from 'react'

interface IProps {
  children: React.ReactNode;
}

const Titles: React.FC<IProps> = ({ children }) => {
  return (
      <h2 className="letter-space uppercase  text-[1.75rem]  md:text-[2.5rem] lg:text-[3.125rem] font-bold" style={{letterSpacing: "3.5px"      }}>
        {children}
      </h2>
  )
}
export default Titles;
