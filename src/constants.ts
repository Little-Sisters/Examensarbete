export const MOTION_VARIANTS = {
  initial: ({ direction }: { direction: "forward" | "backward" }) => ({
    x: direction === "backward" ? "-100%" : "100%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0
    }
  }),
  in: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0
    }
  },
  out: ({ direction }: { direction: "forward" | "backward" }) => ({
    x: direction === "backward" ? "100%" : "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0
    }
  })
};