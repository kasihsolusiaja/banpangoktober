import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, CheckCircle, Clock, XCircle } from 'lucide-react';

const TeamMembers = () => {
  const teamData = [
    {
      id: 1,
      name: 'Ahmad Suryadi',
      nip: '198501234001',
      team: 'Tim A',
      position: 'Ketua Tim',
      status: 'hadir',
      checkIn: '07:30',
      location: 'Kelurahan Tebet'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      nip: '198702567002',
      team: 'Tim A',
      position: 'Anggota',
      status: 'hadir',
      checkIn: '07:45',
      location: 'Kelurahan Tebet'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      nip: '198903890003',
      team: 'Tim A',
      position: 'Anggota',
      status: 'hadir',
      checkIn: '08:00',
      location: 'Kelurahan Tebet'
    },
    {
      id: 4,
      name: 'Dewi Kartika',
      nip: '199104123004',
      team: 'Tim A',
      position: 'Anggota',
      status: 'terlambat',
      checkIn: '08:30',
      location: 'Kelurahan Tebet'
    },
    {
      id: 5,
      name: 'Ridwan Kamil',
      nip: '198805456005',
      team: 'Tim A',
      position: 'Anggota',
      status: 'tidak_hadir',
      checkIn: '-',
      location: '-'
    },
    {
      id: 6,
      name: 'Maya Sari',
      nip: '199206789006',
      team: 'Tim B',
      position: 'Ketua Tim',
      status: 'hadir',
      checkIn: '07:25',
      location: 'Kelurahan Pancoran'
    },
    {
      id: 7,
      name: 'Andi Wijaya',
      nip: '199007012007',
      team: 'Tim B',
      position: 'Anggota',
      status: 'hadir',
      checkIn: '07:40',
      location: 'Kelurahan Pancoran'
    },
    {
      id: 8,
      name: 'Linda Kusuma',
      nip: '199308345008',
      team: 'Tim B',
      position: 'Anggota',
      status: 'hadir',
      checkIn: '07:55',
      location: 'Kelurahan Pancoran'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'hadir':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'terlambat':
        return <Clock className="h-4 w-4 text-banpang-orange" />;
      case 'tidak_hadir':
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'hadir':
        return <Badge className="bg-success text-success-foreground">Hadir</Badge>;
      case 'terlambat':
        return <Badge className="bg-banpang-orange text-white">Terlambat</Badge>;
      case 'tidak_hadir':
        return <Badge variant="destructive">Tidak Hadir</Badge>;
      default:
        return <Badge variant="secondary">Belum Absen</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = {
    hadir: teamData.filter(member => member.status === 'hadir').length,
    terlambat: teamData.filter(member => member.status === 'terlambat').length,
    tidak_hadir: teamData.filter(member => member.status === 'tidak_hadir').length,
  };

  return (
    <Card className="shadow-medium">
      <CardHeader className="bg-gradient-header text-white p-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span className="text-sm md:text-base">Daftar Tim Salur</span>
          </div>
          <div className="text-xs font-normal">
            {stats.hadir + stats.terlambat}/{teamData.length} Hadir
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Statistics */}
        <div className="p-3 bg-muted/30 border-b">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-xl font-bold text-success">{stats.hadir}</div>
              <div className="text-xs text-muted-foreground">Hadir</div>
            </div>
            <div>
              <div className="text-xl font-bold text-banpang-orange">{stats.terlambat}</div>
              <div className="text-xs text-muted-foreground">Terlambat</div>
            </div>
            <div>
              <div className="text-xl font-bold text-destructive">{stats.tidak_hadir}</div>
              <div className="text-xs text-muted-foreground">Tidak Hadir</div>
            </div>
          </div>
        </div>

        {/* Team Members List */}
        <div className="divide-y">
          {teamData.map((member) => (
            <div key={member.id} className="p-3 hover:bg-muted/30 transition-colors">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <h4 className="font-medium text-sm truncate">{member.name}</h4>
                    <Badge variant="outline" className="text-[10px] shrink-0">
                      {member.position}
                    </Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {member.team}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {member.checkIn} • {member.location}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 shrink-0">
                  {getStatusIcon(member.status)}
                  <div className="hidden md:block">
                    {getStatusBadge(member.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMembers;