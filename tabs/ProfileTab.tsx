import { AnimatePresence, motion } from 'framer-motion'
import IntroSection from '@/sections/profile/IntroSection'
import ExperienceSection from '@/sections/profile/ExperienceSection'
import { useTabStore } from '@/store/useTabStore'

export default function ProfileTab() {
  const { activeSubMenu } = useTabStore()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeSubMenu === 'education' ? 'work' : activeSubMenu}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{ height: '100%' }}
      >
        {activeSubMenu === 'personal' && <IntroSection />}
        {(activeSubMenu === 'work' || activeSubMenu === 'education') && (
          <ExperienceSection />
        )}
      </motion.div>
    </AnimatePresence>
  )
}
