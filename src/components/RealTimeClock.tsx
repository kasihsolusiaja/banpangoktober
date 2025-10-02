import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="p-4 bg-gradient-primary text-white shadow-medium">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Clock className="h-6 w-6 md:h-8 md:w-8 animate-pulse" />
          <div className="text-4xl md:text-6xl font-bold font-mono tracking-wider">
            {formatTime(currentTime)}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <Calendar className="h-4 w-4" />
          <div className="opacity-90 text-center">
            {formatDate(currentTime)}
          </div>
        </div>
        <div className="text-xs opacity-75">
          Sistem Absensi BANPANG
        </div>
      </div>
    </Card>
  );
};

export default RealTimeClock;