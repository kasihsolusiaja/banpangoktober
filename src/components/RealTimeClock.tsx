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
    <Card className="p-6 bg-gradient-primary text-white shadow-medium">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Clock className="h-6 w-6" />
          <div>
            <div className="text-2xl font-bold font-mono">
              {formatTime(currentTime)}
            </div>
            <div className="text-sm opacity-90">WIB</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="h-6 w-6" />
          <div className="text-right">
            <div className="text-sm opacity-90">
              {formatDate(currentTime)}
            </div>
            <div className="text-xs opacity-75">
              Sistem Absensi BANPANG
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RealTimeClock;