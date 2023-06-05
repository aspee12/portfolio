import { motion } from 'framer-motion';

function CustomHeader(props: { text: string }) {
    return(
            <motion.h5
                initial={ { opacity: 0, x: -150} }
                whileInView={ { opacity: 1, x: 0 } }
                viewport={ { once: true, amount: 0.9 } }
                transition={ { delay: 0.5, duration: 1.2 } }
                className='font-4 text-[14px] md:text-[18px] text-primary-header text-start'
            >
                { props.text.toUpperCase() }
            </motion.h5>
    );
}

export default CustomHeader;