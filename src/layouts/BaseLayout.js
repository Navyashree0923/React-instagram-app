import { Box } from "@mui/system";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import "../css/baselayout.css";

export default function BaseLayout({children}){

    return <Box className="rootbase">

        <PrimarySearchAppBar/>

        <Box style={{
            flexGrow: 1
        }}>
            {children}
        </Box>

        <LabelBottomNavigation/>

    </Box>
}