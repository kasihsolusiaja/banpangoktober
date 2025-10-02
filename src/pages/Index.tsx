import RealTimeClock from '@/components/RealTimeClock';
import AttendanceForm from '@/components/AttendanceForm';
import ScheduleCalendar from '@/components/ScheduleCalendar';
import TeamMembers from '@/components/TeamMembers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Calendar, Users } from 'lucide-react';
import logoBulog from '@/assets/logo-bulog.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-header text-white shadow-strong">
        <div className="container mx-auto px-3 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="p-2 bg-white rounded-lg">
                <img src={logoBulog} alt="Logo BULOG" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
              </div>
              <div className="flex-1 md:flex-none">
                <h1 className="text-lg md:text-2xl font-bold">ABSENSI BANPANG</h1>
                <p className="text-xs md:text-sm opacity-90">
                  Bantuan Pangan BULOG - Okt 2025
                </p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-base font-semibold">Perum BULOG</div>
              <div className="text-xs opacity-90">Divisi Regional Jakarta</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-3 py-4 space-y-4">
        {/* Real-time Clock */}
        <RealTimeClock />

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Card className="bg-gradient-primary text-white shadow-soft">
            <CardHeader className="pb-2 p-3">
              <CardTitle className="text-sm md:text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Jadwal Hari Ini</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="text-xl md:text-2xl font-bold">2 Lokasi</div>
              <div className="text-xs opacity-90">Penyaluran aktif</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-success text-white shadow-soft">
            <CardHeader className="pb-2 p-3">
              <CardTitle className="text-sm md:text-base flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Tim Hadir</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="text-xl md:text-2xl font-bold">7/8 Orang</div>
              <div className="text-xs opacity-90">Absensi hari ini</div>
            </CardContent>
          </Card>

          <Card className="bg-banpang-orange text-white shadow-soft">
            <CardHeader className="pb-2 p-3">
              <CardTitle className="text-sm md:text-base flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lokasi Aktif</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="text-xl md:text-2xl font-bold text-center md:text-left">Kel. Tebet</div>
              <div className="text-xs opacity-90">Sedang berlangsung</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-4">
          {/* Attendance Form */}
          <AttendanceForm />

          {/* Schedule and Team */}
          <ScheduleCalendar />
          <TeamMembers />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8">
        <div className="container mx-auto px-3 py-4">
          <div className="text-center text-muted-foreground">
            <p className="text-xs">
              © 2025 Perum BULOG - Absensi BANPANG
            </p>
            <p className="text-[10px] mt-1">
              Divisi Regional Jakarta
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
