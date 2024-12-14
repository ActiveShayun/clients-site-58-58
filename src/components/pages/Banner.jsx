
import { easeInOut } from "motion";
import { easeOut, motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center">
                <div className="flex-1 mx-auto">
                    <motion.img
                        animate={{ y: [0, 25, 0] }}
                        transition={{ duration: 3, delay: 1, ease: easeOut, repeat: Infinity }}
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl mx-auto" />
                </div>
                <div className="flex-1">

                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold">Box Office News!</motion.h1>
                    <motion.p
                        animate={{ x: 50, color: ['#e2411e', '#0f93d9', '#ed7c18'] }}
                        transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                        className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </motion.p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;