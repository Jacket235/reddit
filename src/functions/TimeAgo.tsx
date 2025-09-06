import { useState, useEffect } from "react";

interface TimeAgoProps {
  date: string;
}

const TimeAgo: React.FC<TimeAgoProps> = ({ date }) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const past = new Date(date);
      const diff = Math.floor((now.getTime() - past.getTime()) / 1000); // difference in seconds

     let display = "";
    if (diff < 60) display = `${diff} second${diff !== 1 ? "s" : ""} ago`;
    else if (diff < 3600) display = `${Math.floor(diff / 60)} min. ago`; // always "min."
    else if (diff < 86400) display = `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) !== 1 ? "s" : ""} ago`;
    else display = `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) !== 1 ? "s" : ""} ago`;


      setTimeAgo(display);
    };

    updateTime(); // initial calculation
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, [date]);

  return (
    <span>
      <time dateTime={date}>{timeAgo}</time>
    </span>
  );
};

export default TimeAgo;
