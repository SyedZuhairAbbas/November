import {useState , useEffect} from 'react'
import {nicknames} from '../../data/content'
import { motion, AnimatePresence} from 'framer-motion'
import Sparkles from './Sparkles'
import Confetti from 'react-confetti'

export default function LandingPage() {
    
    const [nickname , setNickname] = useState(0)
    const [nameComplete , setNameComplete] = useState(false)
    const [showText, setShowText] = useState(false)

    useEffect(() => {

        if(nameComplete){
            return
        }

        const timer = setTimeout(() => {
            if(nickname + 1 >= nicknames.length){
                setTimeout(() => setNameComplete(true) , 1500)
            } else {
                setNickname(nickname + 1)
            }
        } , 1500)

        return () => clearTimeout(timer)

    } , [nickname])


    useEffect(() => {
        if(!nameComplete) return
        const timer = setTimeout(() => setShowText(true), 2000)
        return () => clearTimeout(timer)
    }, [nameComplete])



    return (
    <div className="w-screen min-h-screen bg-[#462255] flex flex-col justify-center items-center overflow-hidden">
        <Sparkles />
        {showText && <Confetti recycle={false} numberOfPieces={320} />}
        {!nameComplete ? (
            <AnimatePresence mode="wait">
                <motion.p
                    key={nickname}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl text-[#B58DB6] text-center font-bold"
                >
                    {nicknames[nickname]}
                </motion.p>
            </AnimatePresence>
        ) : !showText ? (
                <div />
            ) : (
            <motion.div className="flex flex-col items-center gap-6">
                <motion.p
                    className="font-['Cormorant_Garamond'] text-lg text-[#FFF5F5] text-center max-w-xs mx-auto leading-loose px-8"
                    initial={{opacity: 0 , y: -20}}
                    animate={{opacity: 1 , y: 0}}
                    transition={{duration: 0.8 , delay: 0.2}}
                >
                One name wasn't enough for something so ineffable. naming something this rare and precious honestly takes a lot of attempts. but we did it lol hehe. We just needed that many names to finally say it right.
                </motion.p>

                <motion.p
                    className="font-['Cormorant_Garamond'] text-base text-[#B58DB6] italic text-center mt-4 text-lg font-bold"
                    initial={{opacity: 0 , x: -20}}
                    animate={{opacity: 1 , x: 0}}
                    transition={{duration: 0.8 , delay: 0.8}}
                >
                ps. my favourite has always been your highness/Majesty 👑
                </motion.p>

                <motion.button
                    className="mt-6 px-8 py-3 rounded-full border-2 border-[#B58DB6] text-[#FFF5F5] font-['Nunito'] text-sm tracking-widest uppercase hover:bg-[#B58DB6] hover:text-[#462255] transition-all duration-300"
                    initial={{opacity: 0 , x: -20}}
                    animate={{opacity: 1 , x: 0}}
                    transition={{duration: 0.8 , delay: 2}}
                >
                Open your gift 🎁
                </motion.button>
            </motion.div>
        )}

    </div>
    )
}