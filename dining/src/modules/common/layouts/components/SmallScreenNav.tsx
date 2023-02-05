import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SmallScreenNav = () => {
    return(
      <div className="flex md:hidden">
          <h1 className="text-white text-xl cursor-pointer"><FontAwesomeIcon icon={faBars}/></h1>
      </div>
    )
}