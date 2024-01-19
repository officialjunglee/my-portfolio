import Home from './Home'
import Introduction from './Introduction'
import LandingPageBar from './LandingPageBar'
import TechStack from './TechStack'

const MainPage = () => {
    return (
        <div>
            <LandingPageBar />
            <div className="relative">
                {/* Add a margin-top to create space for the fixed bar */}
                <div className="mt-16">
                    <Introduction />
                </div>
                <div>

                </div>
                <div>
                    <TechStack />
                </div>
            </div>
        </div>
    )
}

export default MainPage
