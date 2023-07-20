import {motion} from "framer-motion";

export const ImgDesktop = (props) => {
    const { img } = props;

    return (
        <motion.div
            className={`imgContainer`}
            style={
                {
                    filter: "brightness(40%)",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all .6s cubic-bezier(.4, .2, 0, .9)"
                }
            }
            whileHover={{
                width: "25%",
                filter: "brightness(100%)",
            }}
        >
        </motion.div>
    );
};

