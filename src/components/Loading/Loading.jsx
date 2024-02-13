import { ClimbingBoxLoader } from "react-spinners"
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ClimbingBoxLoader color="rgba(239, 239, 239, 1)" />
    </div>
  )
}

export default Loading