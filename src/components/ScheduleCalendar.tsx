import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Package } from 'lucide-react';

const ScheduleCalendar = () => {
  // Sample schedule data for October 2025
  const scheduleData = [
    {
      id: 1,
      date: '2025-10-01',
      day: 'Rabu',
      location: 'Kelurahan Pasar Minggu',
      team: 'Tim A (5 orang)',
      quota: '150 paket',
      status: 'scheduled'
    },
    {
      id: 2,
      date: '2025-10-03',
      day: 'Jumat',
      location: 'Kelurahan Kebayoran Lama',
      team: 'Tim B (4 orang)',
      quota: '120 paket',
      status: 'scheduled'
    },
    {
      id: 3,
      date: '2025-10-06',
      day: 'Senin',
      location: 'Kelurahan Pancoran',
      team: 'Tim A (5 orang)',
      quota: '180 paket',
      status: 'scheduled'
    },
    {
      id: 4,
      date: '2025-10-08',
      day: 'Rabu',
      location: 'Kelurahan Tebet',
      team: 'Tim C (6 orang)',
      quota: '200 paket',
      status: 'scheduled'
    },
    {
      id: 5,
      date: '2025-10-10',
      day: 'Jumat',
      location: 'Kelurahan Mampang Prapatan',
      team: 'Tim B (4 orang)',
      quota: '140 paket',
      status: 'scheduled'
    },
    {
      id: 6,
      date: '2025-10-13',
      day: 'Senin',
      location: 'Kelurahan Jagakarsa',
      team: 'Tim A (5 orang)',
      quota: '160 paket',
      status: 'scheduled'
    },
    {
      id: 7,
      date: '2025-10-15',
      day: 'Rabu',
      location: 'Kelurahan Cilandak',
      team: 'Tim C (6 orang)',
      quota: '190 paket',
      status: 'scheduled'
    },
    {
      id: 8,
      date: '2025-10-17',
      day: 'Jumat',
      location: 'Kelurahan Pesanggrahan',
      team: 'Tim B (4 orang)',
      quota: '130 paket',
      status: 'scheduled'
    },
    {
      id: 9,
      date: '2025-10-20',
      day: 'Senin',
      location: 'Kelurahan Setia Budi',
      team: 'Tim A (5 orang)',
      quota: '170 paket',
      status: 'scheduled'
    },
    {
      id: 10,
      date: '2025-10-22',
      day: 'Rabu',
      location: 'Kelurahan Menteng',
      team: 'Tim C (6 orang)',
      quota: '210 paket',
      status: 'scheduled'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-success text-success-foreground">Selesai</Badge>;
      case 'ongoing':
        return <Badge className="bg-banpang-orange text-white">Berlangsung</Badge>;
      case 'scheduled':
        return <Badge variant="outline">Terjadwal</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    });
  };

  return (
    <Card className="shadow-medium">
      <CardHeader className="bg-gradient-header text-white">
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Jadwal Penyaluran BANPANG - Oktober 2025</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {scheduleData.map((schedule) => (
            <div key={schedule.id} className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-2xl font-bold text-primary">
                      {formatDate(schedule.date)}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {schedule.day}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {schedule.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 ml-12">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-banpang-blue" />
                      <span className="font-medium">{schedule.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="h-4 w-4 text-banpang-green" />
                        <span>{schedule.team}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Package className="h-4 w-4 text-banpang-orange" />
                        <span>{schedule.quota}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  {getStatusBadge(schedule.status)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCalendar;