
import { useNavigate } from "react-router-dom";


function MenuItem({ data }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login-user")
    }
    const handleLogout = () => {
        //log out here
        localStorage.removeItem("token");
        navigate("/login-user")
      }

    return (
        <div>
            <button className="p-[5px] w-[100%] relative hover:bg-secondary rounded-lg" onClick={data.title === 'Log out' ? handleLogout : null}>{data.title}</button>
            <span className="absolute top-[80%] left-[77%]" style={{ display: 'inline-block', fontSize: '4rem' }}>{data.icon}</span>
        </div>
    )
}
export default MenuItem;