import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import PropTypes from 'prop-types';

const CountDownContainer = styled(motion.div)`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const LastMinuteCounter = ({ formattedTime }) => {

    return (
        <article className="bg-white text-black w-full h-screen font-extrabold font-poppins ">
            <CountDownContainer>
                <AnimatePresence>
                    <motion.h1
                        key={formattedTime}
                        exit={{ scale: 0, opacity: 0, position: "absolute" }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.6
                        }}
                        className="text-[11rem] md:text-[16rem]"
                    >
                        {formattedTime}
                    </motion.h1>
                </AnimatePresence>
            </CountDownContainer>
        </article>
    )
}

LastMinuteCounter.propTypes = {
    formattedTime: PropTypes.string.isRequired,
};

export default LastMinuteCounter
