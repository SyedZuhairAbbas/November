import {useState , useEffect} from 'react'
import {nicknames} from '../../data/content'
import { motion, AnimatePresence } from 'framer-motion'

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
    <div className="w-screen h-screen bg-[#462255] flex flex-col justify-center items-center">

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
            <div className="flex flex-col items-center gap-6">
                <p className="text-base md:text-lg text-[#B58DB6] text-center max-w-md mx-auto">
                your message text here
                </p>

                <p className="text-xs md:text-sm text-[#9A98B5] font-normal">
                ps. my favourite has always been your highness 👑
                </p>

                <button className="rounded-xl border border-[#B58DB6] text-[#B58DB6] p-4 md:p-6 text-[#B58DB6]">
                Open your gift 🎁
                </button>
            </div>
        )}

    </div>
    )
}