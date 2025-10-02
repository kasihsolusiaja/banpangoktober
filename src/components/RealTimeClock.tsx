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
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
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
    <Card className="p-8 bg-gradient-primary text-white shadow-medium">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <Clock className="h-8 w-8 animate-pulse" />
          <div className="text-6xl font-bold font-mono tracking-wider">
            {formatTime(currentTime)}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <Calendar className="h-5 w-5" />
          <div className="opacity-90">
            {formatDate(currentTime)}
          </div>
        </div>
        <div className="text-sm opacity-75">
          Sistem Absensi BANPANG
        </div>
      </div>
    </Card>
  );
};

export default RealTimeClock;