"use client";
import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"; // Pastikan ini ada
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input"; // Untuk jumlah dewasa/anak
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  BedDouble,
  Search,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { format, addDays } from "date-fns";
import { roomsData, Room } from "@/lib/data";
import Image from "next/image";
import { useSearchParams } from "next/navigation"; // Untuk ambil query param

const BookingContent = () => {
  const searchParams = useSearchParams();
  const initialRoomId = searchParams.get("room");

  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    addDays(new Date(), 2)
  );
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [selectedRoomType, setSelectedRoomType] = useState<string>(
    initialRoomId || ""
  ); // Default ke kamar pertama jika tidak ada dari query
  const [searchResults, setSearchResults] = useState<Room[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialRoomId && roomsData.find((room) => room.id === initialRoomId)) {
      setSelectedRoomType(initialRoomId);
    } else if (roomsData.length > 0 && !initialRoomId) {
      setSelectedRoomType(roomsData[0].id); // Default ke kamar pertama jika tidak ada dari query dan ada data kamar
    }
  }, [initialRoomId]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchResults(null);
    setErrorMessage(null);

    if (!checkInDate || !checkOutDate || checkOutDate <= checkInDate) {
      setErrorMessage("Tanggal check-out harus setelah tanggal check-in.");
      setIsLoading(false);
      return;
    }
    if (!selectedRoomType) {
      setErrorMessage("Silakan pilih tipe kamar.");
      setIsLoading(false);
      return;
    }

    // Simulasi pencarian
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const foundRoom = roomsData.find((room) => room.id === selectedRoomType);
    if (foundRoom) {
      // Untuk demo, kita anggap kamar selalu tersedia
      setSearchResults([foundRoom]);
    } else {
      setErrorMessage("Tipe kamar yang dipilih tidak ditemukan.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-3">
          Rencanakan Penginapan Anda
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Cek ketersediaan dan pesan kamar impian Anda dengan mudah.
        </p>
      </header>

      <Card className="max-w-3xl mx-auto shadow-xl lg:max-w-6xl">
        <CardHeader>
          <CardTitle className="text-2xl">Cari Ketersediaan Kamar</CardTitle>
          <CardDescription>Pilih tanggal dan preferensi Anda.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Tanggal Check-in */}
              <div className="space-y-2">
                <Label htmlFor="checkin">Tanggal Check-in</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkInDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkInDate ? (
                        format(checkInDate, "PPP")
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0, 0, 0, 0))
                      } // Disable tanggal sebelum hari ini
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Tanggal Check-out */}
              <div className="space-y-2">
                <Label htmlFor="checkout">Tanggal Check-out</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkOutDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOutDate ? (
                        format(checkOutDate, "PPP")
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      disabled={(date) =>
                        checkInDate
                          ? date <= checkInDate
                          : date < new Date(new Date().setHours(0, 0, 0, 0))
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="adults">Dewasa</Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="children">Anak-anak</Label>
                <Input
                  id="children"
                  type="number"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                />
              </div>
              <div className="space-y-2 sm:col-span-3">
                <Label htmlFor="roomType">Tipe Kamar</Label>
                <Select
                  value={selectedRoomType}
                  onValueChange={setSelectedRoomType}
                >
                  <SelectTrigger id="roomType">
                    <SelectValue placeholder="Pilih tipe kamar" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomsData.map((room) => (
                      <SelectItem key={room.id} value={room.id}>
                        {room.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Mencari..."
              ) : (
                <>
                  <Search className="mr-2 h-5 w-5" /> Cek Ketersediaan
                </>
              )}
            </Button>
            {errorMessage && (
              <div className="mt-4 p-3 bg-destructive/15 border border-destructive text-destructive rounded-md flex items-center gap-2 text-sm">
                <AlertTriangle className="h-5 w-5" /> {errorMessage}
              </div>
            )}
          </form>
        </CardContent>
      </Card>

      {/* Hasil Pencarian (Demo) */}
      {isLoading && (
        <div className="mt-10 text-center">
          <p className="text-lg text-muted-foreground">
            Mencari kamar terbaik untuk Anda...
          </p>
          {/* Bisa tambahkan skeleton loader di sini */}
        </div>
      )}

      {searchResults && searchResults.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Kamar Tersedia Untuk Anda:
          </h2>
          <div className="p-4 bg-green-500/15 border border-green-600 text-green-700 dark:text-green-400 rounded-md flex items-center gap-2 text-sm mb-6 max-w-xl mx-auto">
            <CheckCircle2 className="h-5 w-5" /> Kamar tersedia untuk tanggal
            yang Anda pilih!
          </div>
          {searchResults.map((room) => (
            <Card
              key={room.id}
              className="max-w-2xl mx-auto shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl mb-2">{room.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {room.description}
                  </CardDescription>
                  <p className="text-lg font-bold text-primary mb-4">
                    {room.price}
                  </p>
                  <div className="text-xs text-muted-foreground mb-4">
                    <p>
                      Check-in: {checkInDate ? format(checkInDate, "PPP") : "-"}
                    </p>
                    <p>
                      Check-out:{" "}
                      {checkOutDate ? format(checkOutDate, "PPP") : "-"}
                    </p>
                    <p>
                      Tamu: {adults} Dewasa, {children} Anak
                    </p>
                  </div>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() =>
                      alert(
                        `Demo: Memesan ${room.name}. Lanjutkan ke pembayaran (tidak diimplementasikan).`
                      )
                    }
                  >
                    <BedDouble className="mr-2 h-5 w-5" /> Pesan Kamar Ini
                  </Button>
                  <p className="text-xs text-center mt-3 text-muted-foreground">
                    Ini adalah sistem demo. Tidak ada pemesanan nyata yang akan
                    diproses.
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      {searchResults === null && !isLoading && !errorMessage && (
        <div className="mt-10 text-center text-muted-foreground">
          <p>
            Silakan isi form di atas dan klik &quot;Cek Ketersediaan&quot; untuk
            melihat pilihan kamar.
          </p>
        </div>
      )}
      {searchResults && searchResults.length === 0 && !isLoading && (
        <div className="mt-10 text-center text-muted-foreground">
          <p>
            Maaf, tidak ada kamar yang cocok dengan kriteria pencarian Anda
            untuk saat ini.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingContent;
