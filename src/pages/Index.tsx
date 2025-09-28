import RealTimeClock from '@/components/RealTimeClock';
import AttendanceForm from '@/components/AttendanceForm';
import ScheduleCalendar from '@/components/ScheduleCalendar';
import TeamMembers from '@/components/TeamMembers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Calendar, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-header text-white shadow-strong">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SISTEM ABSENSI BANPANG</h1>
                <p className="text-sm opacity-90">
                  Bantuan Pangan BULOG - Oktober 2024
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">Perum BULOG</div>
              <div className="text-sm opacity-90">Divisi Regional Jakarta</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Real-time Clock */}
        <RealTimeClock />

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-primary text-white shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Jadwal Hari Ini</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 Lokasi</div>
              <div className="text-sm opacity-90">Penyaluran aktif</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-success text-white shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Tim Hadir</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7/8 Orang</div>
              <div className="text-sm opacity-90">Absensi hari ini</div>
            </CardContent>
          </Card>

          <Card className="bg-banpang-orange text-white shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Lokasi Aktif</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Kelurahan Tebet</div>
              <div className="text-sm opacity-90">Sedang berlangsung</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-banpang-blue shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center space-x-2 text-banpang-blue">
                <Shield className="h-5 w-5" />
                <span>Target Bulan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-banpang-blue">1,650 Paket</div>
              <div className="text-sm text-muted-foreground">Oktober 2024</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Attendance Form */}
          <div className="lg:col-span-1">
            <AttendanceForm />
          </div>

          {/* Right Column - Schedule and Team */}
          <div className="lg:col-span-2 space-y-8">
            <ScheduleCalendar />
            <TeamMembers />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2024 Perum BULOG - Sistem Absensi Penyaluran Bantuan Pangan
            </p>
            <p className="text-xs mt-2">
              Divisi Regional Jakarta | Hubungi IT Support: ext. 1234
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
