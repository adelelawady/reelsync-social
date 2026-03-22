import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Tv, MessageCircle, Zap, Gamepad2, ArrowLeft, Keyboard } from "lucide-react";
import reelBg1 from "@/assets/reel-bg-1.jpg";
import reelBg2 from "@/assets/reel-bg-2.jpg";
import reelBg3 from "@/assets/reel-bg-3.jpg";

const ReelBackground = ({ src, overlay = "from-black/50 via-black/20 to-black/60" }: { src: string; overlay?: string }) => (
  <>
    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className={`absolute inset-0 bg-gradient-to-b ${overlay} z-[1]`} />
  </>
);

const features = [
  {
    id: "sync",
    label: "Watch Together",
    icon: Users,
    title: "Sync Reels with Friends",
    description: "Create a room, invite your friends, and scroll through reels together in real-time. Everyone sees the same reel at the same time.",
    mockup: (
      <div className="flex flex-col h-full relative">
        <ReelBackground src={reelBg2} />
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-3 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-3.5 h-3.5 text-white/80" />
            <div className="relative">
              <Users className="w-4 h-4 text-white/90" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary text-[5px] text-primary-foreground flex items-center justify-center font-bold">3</div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-blue-500/90 text-[7px] text-white px-1.5 py-0.5 rounded flex items-center gap-0.5">
              <Gamepad2 className="w-2.5 h-2.5" /> Remote
            </div>
          </div>
        </div>
        {/* Room panel */}
        <div className="relative z-10 mx-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-2">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[9px] font-bold text-white">movie-night</span>
            <span className="bg-blue-500/70 text-[5px] text-white px-1 rounded">🎮 Remote</span>
          </div>
          {["Alice (you)", "Bob", "Charlie"].map((name, i) => (
            <div key={name} className="flex items-center justify-between py-0.5">
              <div className="flex items-center gap-1">
                <span className="text-[8px] text-white/80">{name}</span>
                {i === 0 && <span className="bg-green-600/80 text-[5px] text-white px-1 rounded">owner</span>}
              </div>
              {i === 0 && <Gamepad2 className="w-2.5 h-2.5 text-white/50" />}
              {i > 0 && <span className="bg-blue-500/70 text-[5px] text-white px-1.5 rounded">Give 🎮</span>}
            </div>
          ))}
        </div>
        {/* Video area — the bg image shows through */}
        <div className="flex-1 relative z-10" />
      </div>
    ),
  },
  {
    id: "remote",
    label: "Remote Control",
    icon: Tv,
    title: "One Person Drives",
    description: "Enable remote control mode so one person picks the reels. Pass the remote to anyone in the room whenever you want.",
    mockup: (
      <div className="flex flex-col h-full relative">
        <ReelBackground src={reelBg3} />
        <div className="relative z-10 flex flex-col h-full pt-6 px-3">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-3 mb-3">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[9px] font-bold text-white">room</span>
              <span className="bg-blue-500/70 text-[5px] text-white px-1 rounded flex items-center gap-0.5">
                <Gamepad2 className="w-2 h-2" /> Remote
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-medium text-white">Alice</span>
                  <span className="text-[7px] text-white/50">(you)</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="bg-green-600/80 text-[5px] text-white px-1 rounded">owner</span>
                  <Gamepad2 className="w-3 h-3 text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-white/70">Bob</span>
                <div className="bg-blue-500 text-[6px] text-white px-2 py-0.5 rounded flex items-center gap-0.5">
                  Give <Gamepad2 className="w-2 h-2" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-white/70">Charlie</span>
                <div className="bg-blue-500 text-[6px] text-white px-2 py-0.5 rounded flex items-center gap-0.5">
                  Give <Gamepad2 className="w-2 h-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-lg p-2.5 text-center">
            <Gamepad2 className="w-6 h-6 mx-auto mb-1 text-primary" />
            <div className="text-[9px] font-medium text-white">You hold the remote</div>
            <div className="text-[7px] text-white/50 mt-0.5">Only you can change reels</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "comments",
    label: "Live Chat",
    icon: MessageCircle,
    title: "React in Real-Time",
    description: "Drop comments and reactions while you watch. See what your friends think about each reel instantly.",
    mockup: (
      <div className="flex flex-col h-full relative">
        <ReelBackground src={reelBg1} />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-3 pt-6 pb-1">
          <div className="flex items-center gap-1.5">
            <ArrowLeft className="w-3 h-3 text-white/70" />
            <div className="relative">
              <Users className="w-3.5 h-3.5 text-white/80" />
              <div className="absolute -top-1 -right-1.5 w-2.5 h-2.5 rounded-full bg-primary text-[5px] text-primary-foreground flex items-center justify-center font-bold">4</div>
            </div>
          </div>
          <Keyboard className="w-3.5 h-3.5 text-white/40" />
        </div>

        {/* Chat messages floating over video */}
        <div className="flex-1 relative z-10 px-3 flex flex-col justify-end pb-1">
          <div className="space-y-2">
            <div className="flex items-end gap-1">
              <div className="bg-gradient-to-r from-pink-500/90 to-orange-400/90 rounded-2xl rounded-bl-md px-2 py-1 max-w-[120px]">
                <div className="text-[5px] font-bold text-white/80 uppercase tracking-wider">BOB</div>
                <div className="text-[8px] text-white leading-tight">this one is hilarious 😂</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 rounded-2xl rounded-br-md px-2 py-1 max-w-[100px]">
                <div className="text-[5px] font-bold text-white/80 uppercase tracking-wider">YOU</div>
                <div className="text-[8px] text-white leading-tight">wait for it!! 👀</div>
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="bg-gradient-to-r from-pink-500/90 to-orange-400/90 rounded-2xl rounded-bl-md px-2 py-1 max-w-[120px]">
                <div className="text-[5px] font-bold text-white/80 uppercase tracking-wider">ALICE</div>
                <div className="text-[8px] text-white leading-tight">I'm crying 💀💀</div>
              </div>
            </div>
            <div className="flex items-end gap-1">
              <div className="bg-gradient-to-r from-pink-500/90 to-orange-400/90 rounded-2xl rounded-bl-md px-2 py-1 max-w-[120px]">
                <div className="text-[5px] font-bold text-white/80 uppercase tracking-wider">CHARLIE</div>
                <div className="text-[8px] text-white leading-tight">send another one 🔥</div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 rounded-2xl rounded-br-md px-2 py-1">
                <div className="text-[5px] font-bold text-white/80 uppercase tracking-wider">YOU</div>
                <div className="text-[8px] text-white leading-tight">🔥🔥🔥</div>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="relative z-10 px-3 pb-4 pt-2">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-2.5 py-1.5 flex items-center gap-2">
            <span className="text-[8px] text-white/50 flex-1">Say something...</span>
            <span className="bg-blue-500 text-[7px] text-white px-2 py-0.5 rounded-lg font-medium">Send</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "instant",
    label: "Instant Setup",
    icon: Zap,
    title: "Ready in Seconds",
    description: "No accounts needed. Just pick a name, create or join a room, and start watching. It's that simple.",
    mockup: (
      <div className="flex flex-col h-full pt-8 px-3 bg-gradient-to-b from-card via-card/90 to-card">
        {/* Logo area */}
        <div className="text-center mb-4">
          <div className="text-2xl mb-1">🎬</div>
          <div className="text-sm font-bold">ReelWatch</div>
        </div>
        {/* User card */}
        <div className="bg-card/80 border border-border/40 rounded-lg p-2.5 flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">A</div>
          <div className="flex-1">
            <div className="text-[9px] font-medium">@aswadvibe</div>
            <div className="text-[7px] text-green-400">✓ Instagram verified</div>
          </div>
          <span className="text-[7px] text-red-400/80 border border-red-400/30 px-1.5 py-0.5 rounded">Log out</span>
        </div>
        {/* Name input */}
        <div className="mb-3">
          <div className="text-[7px] text-muted-foreground uppercase tracking-wider mb-1 font-medium">Your display name in rooms</div>
          <div className="bg-muted/50 border border-border/40 rounded-lg px-2.5 py-2 text-[9px] text-foreground">aswadvibe</div>
        </div>
        {/* Continue button */}
        <div className="bg-blue-500 text-white text-center text-[10px] py-2 rounded-lg font-semibold">
          Continue →
        </div>
      </div>
    ),
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState("sync");
  const feature = features.find(f => f.id === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 justify-center flex-wrap mb-8">
        {features.map(f => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === f.id
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <f.icon className="w-4 h-4" />
            {f.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
          <div className="phone-mockup w-[240px] mx-auto h-[420px] overflow-hidden">
            {feature.mockup}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
