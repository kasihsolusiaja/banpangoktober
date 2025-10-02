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
      <CardHeader className="bg-gradient-header text-white p-4">
        <CardTitle className="flex items-center gap-2 text-base">
          <Clock className="h-4 w-4" />
          <span>Absensi Tim Salur</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div>
          <Label htmlFor="nama" className="text-sm">Nama Petugas</Label>
          <Input id="nama" placeholder="Masukkan nama petugas" className="mt-1" />
        </div>

        <div>
          <Label className="text-sm">Lokasi GPS</Label>
          <div className="flex gap-2 mt-1">
            <Input 
              value={location} 
              placeholder="Koordinat GPS"
              readOnly
              className="flex-1 text-sm"
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
            <Badge variant="outline" className="mt-2 text-xs">
              📍 Lokasi berhasil dideteksi
            </Badge>
          )}
        </div>

        <div>
          <Label htmlFor="photo" className="text-sm">Foto Bukti</Label>
          <div className="mt-1">
            <label htmlFor="photo" className="block">
              <div className="flex items-center justify-center gap-2 px-4 py-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors active:bg-muted">
                <Camera className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">📸 Buka Kamera</span>
              </div>
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </div>
          {photo && (
            <Badge variant="outline" className="mt-2 text-xs">
              ✅ {photo.name}
            </Badge>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          {!isCheckedIn ? (
            <Button 
              onClick={handleCheckIn}
              className="flex-1 bg-gradient-success hover:bg-success-hover py-6 text-base"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Absen Masuk
            </Button>
          ) : (
            <Button 
              onClick={handleCheckOut}
              variant="destructive"
              className="flex-1 py-6 text-base"
            >
              <Clock className="h-5 w-5 mr-2" />
              Absen Keluar
            </Button>
          )}
        </div>

        {isCheckedIn && (
          <div className="p-3 bg-success/10 border border-success rounded-lg">
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium text-sm">Sedang Bertugas</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Check-in: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceForm;