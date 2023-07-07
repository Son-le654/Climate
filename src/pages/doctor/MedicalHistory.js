import HomeHeaderService from "../../module/home/HomeHeaderService"
import MedicalHistoryContent from "../../module/doctor/MedicalHistoryContent/MedicalHistoryContent";


function MedicalHistory() {
    return (
        <div>
            <div className="bg-white">
                <HomeHeaderService />
            </div>
            <div style={{ padding: "3% 12%" }} className="bg-white">
                <MedicalHistoryContent />
            </div>
            <div>

            </div>
        </div>
    )
}
export default MedicalHistory