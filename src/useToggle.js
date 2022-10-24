import { useContext, useState, useEffect } from 'react';

export const useToggle = (initialVal = false) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible((prev) => !prev);
  };
  return [isVisible, toggle];
};
