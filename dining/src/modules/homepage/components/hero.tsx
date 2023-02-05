import { Button } from "antd"

export const HeroHomePage: React.FC<{}> = () => {
    return (
      <div className="min-h-[70vh] bg-black h-100 w-100 flex justify-center items-center p-5">
        <div className="text-center text-white font-bold font-mono sm:max-w-xl space-y-3">
            <h1 className="text-2xl sm:text-5xl"><span className="text-red-700 font-extrabold">Unlimited</span> movies,TV shows, and more.</h1>
            <p className="text-xl sm:text-1xl"><span className="text-red-700">Watch</span> anywhere. Cancel <span className="text-red-700">anytime.</span></p>
          <div className="pt-5 w-75">
          <a href="/signup"><Button size="large" className="bg-red-600 text-white border-0 sm:w-[250px] hover:bg-red-900 hover:text-white  ">GET STARTED</Button></a>
          </div>
        </div>
        <div>

        </div>
      </div>
    )
}