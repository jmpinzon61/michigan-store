import { useEffect } from 'react';

interface YearDisplayProps {
    onYearChange: (year: number) => void;
}


export const YearDisplay: React.FC<YearDisplayProps> = ({ onYearChange }) => {

    useEffect(()=>{
        const updateYear = () => {
           const dateInColombia = new Date().toLocaleDateString('en-US', {timeZone: 'America/Bogota'});
           const year = new Date(dateInColombia).getFullYear();
           onYearChange(year);
        };

        updateYear();

        const intervaleId = setInterval(updateYear, 1000 * 60 * 60)

        return () => clearInterval(intervaleId)
    },[onYearChange]);
    
  return null;
}
