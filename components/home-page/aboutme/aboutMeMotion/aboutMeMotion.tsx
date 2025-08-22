// AboutMeMotion.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutMeMotion({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}
