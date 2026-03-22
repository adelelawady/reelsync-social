import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Keyboard, Users } from "lucide-react";

export function PhoneMockup() {
  return (
    <motion.div
      className="phone-mockup w-[280px] h-[560px] mx-auto animate-float"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10" />

      {/* Screen content — mimics the room/watching view */}
      <div className="h-full flex flex-col bg-gradient-to-b from-card via-card/80 to-card relative overflow-hidden">
        {/* Fake video background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/60 via-card to-muted/40 z-0" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[30%] left-[25%] w-[55%] h-[35%] rounded-2xl bg-gradient-to-br from-muted-foreground/10 to-muted/20 blur-sm" />
          <div className="absolute top-[35%] left-[30%] w-[45%] h-[25%] rounded-xl bg-muted-foreground/8" />
        </div>

        {/* Top bar */}
        <motion.div
          className="relative z-10 flex items-center justify-between px-3 pt-8 pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-foreground/70" />
            <div className="relative">
              <Users className="w-5 h-5 text-foreground/80" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary text-[6px] text-primary-foreground flex items-center justify-center font-bold">2</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-blue-500/90 text-[8px] text-white px-2 py-1 rounded-md flex items-center gap-1 font-medium">
              <Gamepad2 className="w-3 h-3" />
              Remote
            </div>
            <Keyboard className="w-4 h-4 text-foreground/50" />
          </div>
        </motion.div>

        {/* Room info dropdown */}
        <motion.div
          className="relative z-10 mx-3 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border/40 rounded-xl p-2.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-bold text-foreground">room</span>
              <div className="bg-blue-500/80 text-[6px] text-white px-1.5 py-0.5 rounded flex items-center gap-0.5">
                <Gamepad2 className="w-2 h-2" />
                Remote
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] text-foreground/80 font-medium">aswadvibe</span>
                <span className="text-[8px] text-muted-foreground">(you)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-green-600/80 text-[6px] text-white px-1.5 py-0.5 rounded">owner</span>
                <Gamepad2 className="w-2.5 h-2.5 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-foreground/70">aswadvibeijh</span>
                <div className="bg-blue-500/80 text-[6px] text-white px-2 py-0.5 rounded flex items-center gap-0.5">
                  Give <Gamepad2 className="w-2 h-2" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating comments over "video" */}
        <div className="flex-1 relative z-10 px-3">
          {/* Left-side comment bubbles */}
          <motion.div
            className="absolute left-2 top-[30%]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="bg-gradient-to-r from-pink-500/90 to-orange-400/90 rounded-2xl px-2.5 py-1.5 max-w-[110px]">
              <div className="text-[7px] font-bold text-white uppercase tracking-wide">ASWADVIBEIJH</div>
              <div className="text-[9px] text-white font-medium">hello</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-2 top-[55%]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-pink-500/90 to-orange-400/90 rounded-2xl px-2.5 py-1.5 max-w-[110px]">
              <div className="text-[7px] font-bold text-white uppercase tracking-wide">ASWADVIBEIJH</div>
              <div className="text-[9px] text-white font-medium">lol 😂</div>
            </div>
          </motion.div>

          {/* Right-side "you" bubbles */}
          <motion.div
            className="absolute right-2 top-[22%]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <div className="bg-blue-500 rounded-2xl px-3 py-1.5">
              <div className="text-[7px] font-bold text-white uppercase">YOU</div>
              <div className="text-[9px] text-white font-medium">hi</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-2 top-[45%]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
          >
            <div className="bg-blue-500 rounded-2xl px-3 py-1.5">
              <div className="text-[7px] font-bold text-white uppercase">YOU</div>
              <div className="text-[9px] text-white font-medium">nice! 🔥</div>
            </div>
          </motion.div>
        </div>

        {/* Comment input bar */}
        <motion.div
          className="relative z-10 px-3 pb-6 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <div className="bg-card/60 backdrop-blur-md border border-border/40 rounded-xl px-3 py-2 flex items-center gap-2">
            <div className="flex-1 text-[10px] text-muted-foreground">Say something...</div>
            <div className="bg-blue-500 text-white text-[8px] font-semibold px-2.5 py-1 rounded-lg">Send</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
