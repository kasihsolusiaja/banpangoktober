import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Camera, MapPin, CheckCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const AttendanceForm = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [location, setLocation] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
          toast.success('Lokasi berhasil dideteksi');
        },
        () => {
          toast.error('Gagal mendapatkan lokasi GPS');
        }
      );
    } else {
      toast.error('GPS tidak didukung oleh browser ini');
    }
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
      toast.success('Foto berhasil dipilih');
    }
  };

  const handleCheckIn = () => {
    if (!location) {
      toast.error('Harap aktifkan GPS terlebih dahulu');
      return;
    }
    if (!photo) {
      toast.error('Harap ambil foto terlebih dahulu');
      return;
    }
    
    setIsCheckedIn(true);
    toast.success('Absen masuk berhasil dicatat!');
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setLocation('');
    setPhoto(null);
    toast.success('Absen keluar berhasil dicatat!');
  };

  return (
    <Card className="shadow-medium">
      <CardHeader className="bg-gradient-header text-white">
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Absensi Tim Salur</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nama">Nama Petugas</Label>
            <Input id="nama" placeholder="Masukkan nama petugas" />
          </div>
          <div>
            <Label htmlFor="nip">NIP/ID Petugas</Label>
            <Input id="nip" placeholder="Masukkan NIP/ID" />
          </div>
        </div>

        <div>
          <Label>Lokasi GPS</Label>
          <div className="flex space-x-2 mt-1">
            <Input 
              value={location} 
              placeholder="Koordinat GPS akan muncul di sini"
              readOnly
              className="flex-1"
            />
            <Button 
              onClick={getCurrentLocation}
              variant="outline"
              size="icon"
              className="shrink-0"
            >
              <MapPin className="h-4 w-4" />
            </Button>
          </div>
          {location && (
            <Badge variant="outline" className="mt-2">
              📍 Lokasi berhasil dideteksi
            </Badge>
          )}
        </div>

        <div>
          <Label htmlFor="photo">Foto Bukti</Label>
          <div className="mt-1">
            <Input
              id="photo"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoUpload}
              className="cursor-pointer"
            />
          </div>
          {photo && (
            <Badge variant="outline" className="mt-2">
              📷 {photo.name}
            </Badge>
          )}
        </div>

        <div className="flex space-x-3 pt-4">
          {!isCheckedIn ? (
            <Button 
              onClick={handleCheckIn}
              className="flex-1 bg-gradient-success hover:bg-success-hover"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Absen Masuk
            </Button>
          ) : (
            <Button 
              onClick={handleCheckOut}
              variant="destructive"
              className="flex-1"
            >
              <Clock className="h-4 w-4 mr-2" />
              Absen Keluar
            </Button>
          )}
        </div>

        {isCheckedIn && (
          <div className="p-4 bg-success/10 border border-success rounded-lg">
            <div className="flex items-center space-x-2 text-success">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Status: Sedang Bertugas</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Absen masuk tercatat pada {new Date().toLocaleTimeString('id-ID')}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceForm;