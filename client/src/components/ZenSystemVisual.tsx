import { motion } from "framer-motion";

export default function ZenSystemVisual() {
    return (
        <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
            {/* Central Core */}
            <motion.div
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-purple-600 blur-2xl opacity-50"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-500 shadow-[0_0_50px_rgba(124,58,237,0.5)] z-10" />

            {/* Orbiting Rings */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Inner Ring */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    fill="none"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-primary"
                />

                {/* Middle Ring */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="120"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    fill="none"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="text-foreground"
                />

                {/* Outer Ring */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="160"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.1"
                    fill="none"
                    strokeDasharray="10 10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="text-primary"
                />

                {/* Floating Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.g key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50 + i * 5, repeat: Infinity, ease: "linear" }}
                        style={{ originX: "200px", originY: "200px" }}
                    >
                        <motion.circle
                            cx={200 + 140 * Math.cos(angle * Math.PI / 180)}
                            cy={200 + 140 * Math.sin(angle * Math.PI / 180)}
                            r="4"
                            fill="currentColor"
                            className="text-primary"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </motion.g>
                ))}
            </svg>

            {/* Connecting Lines (Abstract) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
        </div>
    );
}
